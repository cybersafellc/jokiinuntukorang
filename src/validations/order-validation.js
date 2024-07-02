import Joi from "joi";

const create = Joi.object({
  address_id: Joi.string().required(),
  diskon: Joi.number().required(),
  users_id: Joi.string().required(),
  items: Joi.array()
    .items(
      Joi.object({
        product_id: Joi.string().required(),
        qty: Joi.number().required(),
      }).required()
    )
    .required(),
});

const getAll = Joi.object({
  skip: Joi.number().optional(),
  take: Joi.number().optional(),
});

const search = Joi.object({
  search: Joi.string().required(),
  skip: Joi.number().optional(),
  take: Joi.number().optional(),
});

const searchByDate = Joi.object({
  date: Joi.date().required(),
  skip: Joi.number().optional(),
  take: Joi.number().optional(),
});

const searchByDateRange = Joi.object({
  start_date: Joi.date().optional(),
  end_date: Joi.date().optional(),
  skip: Joi.number().optional(),
  take: Joi.number().optional(),
});

export default { create, getAll, search, searchByDate, searchByDateRange };
