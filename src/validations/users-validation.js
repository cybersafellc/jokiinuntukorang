import Joi from "joi";

const create = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  key: Joi.string().required(),
});

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const getProfile = Joi.object({
  id: Joi.string().required(),
});

const resetPassword = Joi.object({
  id: Joi.string().required(),
  current_password: Joi.string().required(),
  new_password: Joi.string().required(),
});

const updateName = Joi.object({
  id: Joi.string().required(),
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
});

export default { create, login, getProfile, resetPassword, updateName };
