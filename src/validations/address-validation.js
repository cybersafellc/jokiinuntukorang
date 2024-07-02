import Joi from "joi";

const create = Joi.object({
  alamat_1: Joi.string().required(),
  alamat_2: Joi.string().required(),
  kota: Joi.string().required(),
  provinsi: Joi.string().required(),
  kode_pos: Joi.number().required(),
  negara: Joi.string().required(),
  telepon: Joi.string().required(),
});

const getById = Joi.object({
  id: Joi.string().required(),
});

const update = Joi.object({
  id: Joi.string().required(),
  data_update: Joi.object({
    alamat_1: Joi.string().optional(),
    alamat_2: Joi.string().optional(),
    kota: Joi.string().optional(),
    provinsi: Joi.string().optional(),
    kode_pos: Joi.number().optional(),
    negara: Joi.string().optional(),
    telepon: Joi.string().optional(),
  }).required(),
});

const del = Joi.object({
  id: Joi.string().required(),
});

export default { create, getById, update, del };
