import { database } from "../app/database.js";
import { ResponseError } from "../errors/responses-error.js";
import orderValidation from "../validations/order-validation.js";
import validation from "../validations/validation.js";
import { Response } from "../app/response.js";
import { logger } from "../app/logging.js";

const create = async (request) => {
  const result = await validation(orderValidation.create, request);
  const countAddress = await database.address.count({
    where: {
      id: result.address_id,
    },
  });
  if (!countAddress)
    throw new ResponseError(
      400,
      `address_id ${result.address_id} does not exist`
    );

  result.items = await result.items.reduce((acc, current) => {
    const existingItem = acc.find(
      (item) => item.product_id === current.product_id
    );
    if (existingItem) {
      existingItem.qty += current.qty;
    } else {
      acc.push({ ...current });
    }
    return acc;
  }, []);

  const ProductNotFound = await Promise.all(
    result.items.map(async (item) => {
      const count = await database.products.count({
        where: {
          id: item.product_id,
        },
      });
      if (!count) {
        item.qty = undefined;
        return item;
      }
      return null;
    })
  );
  const filteredProductNotFound = ProductNotFound.filter(
    (item) => item !== null
  );

  if (filteredProductNotFound[0]) {
    throw new ResponseError(400, "please provided valid product_id");
  }

  // exe
  result.id = crypto.randomUUID();
  result.tanggal = new Date();
  result.total_harga = 0;
  await Promise.all(
    await result.items.map(async (item) => {
      const product = await database.products.findFirst({
        where: {
          id: item.product_id,
        },
      });
      logger.error(product); // disini ada fieldnya pun lengkap
      item.harga_beli = product.harga; // disini gada kenapa? padahal
      item.id = crypto.randomUUID();
      item.orders_id = result.id;
      item.total_harga = product.harga * item.qty;
      await database.transactions.create({
        data: item,
      });
      result.total_harga += item.total_harga;
    })
  );
  result.items = undefined;
  result.total_harga = (await result.total_harga) * (1 - result.diskon / 100);
  const createdOrders = await database.orders.create({
    data: result,
  });

  createdOrders.address = await database.address.findFirst({
    where: {
      id: createdOrders.address_id,
    },
  });
  createdOrders.users = await database.users.findFirst({
    where: {
      id: createdOrders.users_id,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
    },
  });
  createdOrders.items = await database.transactions.findMany({
    where: {
      orders_id: createdOrders.id,
    },
  });
  createdOrders.items = await Promise.all(
    await createdOrders.items.map(async (item) => {
      item.product = await database.products.findFirst({
        where: {
          id: item.product_id,
        },
      });
      item.product_id = undefined;
      return item;
    })
  );

  createdOrders.users_id = undefined;
  createdOrders.address_id = undefined;
  return new Response(
    200,
    "successfully created order",
    createdOrders,
    null,
    false
  );
};

const getAll = async (request) => {
  const result = await validation(orderValidation.getAll, request);
  console.log(result);
  const orders = await database.orders.findMany({
    orderBy: {
      tanggal: "desc",
    },
    skip: result.skip,
    take: result.take,
  });
  const newOrders = await Promise.all(
    orders.map(async (order) => {
      order.address = await database.address.findFirst({
        where: {
          id: order.address_id,
        },
      });
      order.users = await database.users.findFirst({
        where: {
          id: order.users_id,
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      });
      order.items = await database.transactions.findMany({
        where: {
          orders_id: order.id,
        },
      });
      order.items = await Promise.all(
        await order.items.map(async (item) => {
          item.product = await database.products.findFirst({
            where: {
              id: item.product_id,
            },
          });
          item.product_id = undefined;
          return item;
        })
      );
      order.address_id = undefined;
      order.users_id = undefined;
      return order;
    })
  );
  return new Response(200, "successfully get", newOrders, null, false);
};

const search = async (request) => {
  const result = await validation(orderValidation.search, request);
  const user = await database.users.findFirst({
    where: {
      OR: [
        {
          first_name: {
            contains: result.search,
          },
        },
        {
          last_name: {
            contains: result.search,
          },
        },
      ],
    },
  });
  if (!user)
    return new Response(
      200,
      "uh-oh users with firsname or lastname like " +
        result.search +
        " does not exist"
    );
  const orders = await database.orders.findMany({
    orderBy: {
      tanggal: "desc",
    },
    skip: result.skip,
    take: result.take,
    where: {
      users_id: user.id,
    },
  });
  const newOrders = await Promise.all(
    orders.map(async (order) => {
      order.address = await database.address.findFirst({
        where: {
          id: order.address_id,
        },
      });
      order.users = user;
      order.items = await database.transactions.findMany({
        where: {
          orders_id: order.id,
        },
      });
      order.items = await Promise.all(
        await order.items.map(async (item) => {
          item.product = await database.products.findFirst({
            where: {
              id: item.product_id,
            },
          });
          item.product_id = undefined;
          return item;
        })
      );
      order.address_id = undefined;
      order.users_id = undefined;
      return order;
    })
  );
  return new Response(200, "testing", newOrders, null, false);
};

const searchByDate = async (request) => {
  const result = await validation(orderValidation.searchByDate, request);
  result.date = new Date(result.date);
  console.log(result);
  const orders = await database.orders.findMany({
    orderBy: {
      tanggal: "desc",
    },
    where: {
      tanggal: {
        gte: result.date,
        lt: new Date(result.date.getTime() + 24 * 60 * 60 * 1000),
      },
    },
    skip: result.skip,
    take: result.take,
  });
  const newOrders = await Promise.all(
    orders.map(async (order) => {
      order.address = await database.address.findFirst({
        where: {
          id: order.address_id,
        },
      });
      order.users = await database.users.findFirst({
        where: {
          id: order.users_id,
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      });
      order.items = await database.transactions.findMany({
        where: {
          orders_id: order.id,
        },
      });
      order.items = await Promise.all(
        await order.items.map(async (item) => {
          item.product = await database.products.findFirst({
            where: {
              id: item.product_id,
            },
          });
          item.product_id = undefined;
          return item;
        })
      );
      order.address_id = undefined;
      order.users_id = undefined;
      return order;
    })
  );
  return new Response(200, "successfully get", newOrders, null, false);
};

const searchByDateRange = async (request) => {
  const result = await validation(orderValidation.searchByDateRange, request);
  const orders = await database.orders.findMany({
    orderBy: {
      tanggal: "desc",
    },
    skip: result.skip,
    take: result.take,
    where: {
      tanggal: {
        gte: result.start_date,
        lte: result.end_date,
      },
    },
  });
  const newOrders = await Promise.all(
    orders.map(async (order) => {
      order.address = await database.address.findFirst({
        where: {
          id: order.address_id,
        },
      });
      order.users = await database.users.findFirst({
        where: {
          id: order.users_id,
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      });
      order.items = await database.transactions.findMany({
        where: {
          orders_id: order.id,
        },
      });
      order.items = await Promise.all(
        await order.items.map(async (item) => {
          item.product = await database.products.findFirst({
            where: {
              id: item.product_id,
            },
          });
          item.product_id = undefined;
          return item;
        })
      );
      order.address_id = undefined;
      order.users_id = undefined;
      return order;
    })
  );
  return new Response(200, "successfully get", newOrders, null, false);
};

export default { create, getAll, search, searchByDate, searchByDateRange };
