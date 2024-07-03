import usersService from "../services/users-service.js";

const create = async (req, res, next) => {
  try {
    const response = await usersService.create(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const response = await usersService.login(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const verifToken = async (req, res, next) => {
  try {
    const response = await usersService.verifToken();
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    req.body.id = await req.id;
    const response = await usersService.getProfile(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    req.body.id = await req.id;
    const response = await usersService.resetPassword(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

const updateName = async (req, res, next) => {
  try {
    req.body.id = await req.id;
    const response = await usersService.updateName(req.body);
    res.status(response.status).json(response).end();
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  login,
  verifToken,
  getProfile,
  resetPassword,
  updateName,
};
