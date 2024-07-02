import addressService from "../services/address-service.js";

const create = async (req, res, next) => {
  try {
    const response = await addressService.create(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const { id } = await req.query;
    if (id) {
      req.body.id = id;
      const response = await addressService.getById(req.body);
      res.status(response.status).json(response).end();
    } else {
      const response = await addressService.getAll();
      res.status(response.status).json(response).end();
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await addressService.update(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const del = async (req, res, next) => {
  try {
    const response = await addressService.del(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

export default { create, get, update, del };
