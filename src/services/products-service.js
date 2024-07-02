import { database } from "../app/database.js";
import { Response } from "../app/response.js";
import { ResponseError } from "../errors/responses-error.js";
import productsValidation from "../validations/products-validation.js";
import validation from "../validations/validation.js";
import crypto from "crypto";

const create = async (request) => {
  const result = await validation(productsValidation.create, request);
  const count = await database.products.count({
    where: {
      nama: result.nama,
    },
  });
  if (count) throw new ResponseError(400, "product already exist");
  result.id = crypto.randomUUID();
  const created = await database.products.create({
    data: result,
  });
  return new Response(200, "successfully created", created, null, false);
};

const getAll = async (request) => {
  const result = await validation(productsValidation.getAll, request);
  const products = await database.products.findMany({
    skip: result.skip,
    take: result.take,
  });
  return new Response(
    200,
    "successfully get all products",
    products,
    null,
    false
  );
};

const getById = async (request) => {
  const result = await validation(productsValidation.getById, request);
  const product = await database.products.findFirst({
    where: result,
  });
  if (!product) throw new ResponseError(400, "products does not exist");
  return new Response(
    200,
    "successfully get product with id " + result.id,
    product,
    null,
    false
  );
};

const search = async (request) => {
  const result = await validation(productsValidation.search, request);
  console.log(result);
  const products = await database.products.findMany({
    skip: result.skip,
    take: result.take,
    where: {
      nama: {
        contains: result.search,
      },
    },
  });
  return new Response(
    200,
    "successfully get with search: " + result.search,
    products,
    null,
    false
  );
};

const update = async (request) => {
  const result = await validation(productsValidation.update, request);
  const count = await database.products.count({
    where: {
      id: result.id,
    },
  });
  if (!count)
    throw new ResponseError(
      400,
      `product with id: ${result.id} does not exist`
    );
  const updated = await database.products.update({
    data: result.data_update,
    where: {
      id: result.id,
    },
  });
  return new Response(200, "successfully update", updated, null, false);
};

const del = async (request) => {
  const result = await validation(productsValidation.del, request);
  const count = await database.products.count({
    where: result,
  });
  if (!count)
    throw new ResponseError(
      400,
      `product with id: ${result.id} does not exist`
    );
  const deleted = await database.products.delete({
    where: result,
  });
  return new Response(200, "successfully deleted", deleted, null, false);
};

export default {
  create,
  getAll,
  getById,
  search,
  update,
  del,
};
