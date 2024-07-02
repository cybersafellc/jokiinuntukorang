import productsService from "../services/products-service.js";

const create = async (req, res, next) => {
  try {
    const response = await productsService.create(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const { id, search, skip, take } = await req.query;
    if (id) {
      req.body.id = id;
      const response = await productsService.getById(req.body);
      res.status(response.status).json(response).end();
    } else if (search) {
      req.body.skip = skip || undefined;
      req.body.take = take || undefined;
      req.body.search = search;
      const response = await productsService.search(req.body);
      res.status(response.status).json(response).end();
    } else {
      req.body.skip = skip || undefined;
      req.body.take = take || undefined;
      const response = await productsService.getAll(req.body);
      res.status(response.status).json(response).end();
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await productsService.update(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const del = async (req, res, next) => {
  try {
    const response = await productsService.del(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

export default { create, get, update, del };
