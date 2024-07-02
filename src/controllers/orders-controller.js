import orderService from "../services/order-service.js";

const create = async (req, res, next) => {
  try {
    req.body.users_id = await req.id;
    const response = await orderService.create(req.body);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const { search, start_date, end_date, date, skip, take } = await req.query;
    if (search) {
      req.body.take = take || undefined;
      req.body.skip = skip || undefined;
      req.body.search = search;
      const response = await orderService.search(req.body);
      res.status(response.status).json(response).end();
    } else if (start_date || end_date) {
      req.body.take = take || undefined;
      req.body.skip = skip || undefined;
      req.body.start_date = start_date || undefined;
      req.body.end_date = end_date || undefined;
      const response = await orderService.searchByDateRange(req.body);
      res.status(response.status).json(response).end();
    } else if (date) {
      req.body.take = take || undefined;
      req.body.skip = skip || undefined;
      req.body.date = date;
      const response = await orderService.searchByDate(req.body);
      res.status(response.status).json(response).end();
    } else {
      req.body.take = take || undefined;
      req.body.skip = skip || undefined;
      const response = await orderService.getAll(req.body);
      res.status(response.status).json(response).end();
    }
  } catch (error) {
    next(error);
  }
};

export default { create, get };
