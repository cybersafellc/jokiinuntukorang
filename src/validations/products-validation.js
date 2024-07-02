import Joi from "joi";

const create = Joi.object({
  nama: Joi.string().required(),
  harga: Joi.number().required(),
  img: Joi.string().required(),
});

const getById = Joi.object({
  id: Joi.string().required(),
});

const search = Joi.object({
  search: Joi.string().required(),
  skip: Joi.number().optional(),
  take: Joi.number().optional(),
});

const update = Joi.object({
  id: Joi.string().required(),
  data_update: Joi.object({
    nama: Joi.string().optional(),
    harga: Joi.number().optional(),
    img: Joi.string().optional(),
  }).required(),
});

const del = Joi.object({
  id: Joi.string().required(),
});

const getAll = Joi.object({
  skip: Joi.number().optional(),
  take: Joi.number().optional(),
});

export default {
  create,
  getById,
  search,
  update,
  del,
  getAll,
};
