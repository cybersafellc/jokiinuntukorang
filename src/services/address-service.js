import { database } from "../app/database.js";
import { Response } from "../app/response.js";
import { ResponseError } from "../errors/responses-error.js";
import addressValidation from "../validations/address-validation.js";
import validation from "../validations/validation.js";
import crypto from "crypto";

const create = async (request) => {
  const result = await validation(addressValidation.create, request);
  const count = await database.address.count({
    where: result,
  });
  if (count) throw new ResponseError(400, "address already exist");
  result.id = crypto.randomUUID();
  const created = await database.address.create({
    data: result,
  });
  return new Response(200, "successfully created", created, null, false);
};

const getAll = async (req, res, next) => {
  const address = await database.address.findMany();
  return new Response(200, "successfully get all", address, null, false);
};

const getById = async (request) => {
  const result = await validation(addressValidation.getById, request);
  const address = await database.address.findFirst({
    where: result,
  });
  if (!address)
    throw new ResponseError(400, `address by id ${result.id} does not exist`);
  return new Response(
    200,
    "successfully get address by id",
    address,
    null,
    false
  );
};

const update = async (request) => {
  const result = await validation(addressValidation.update, request);
  const count = await database.address.count({
    where: {
      id: result.id,
    },
  });
  if (!count)
    throw new ResponseError(400, `address with id ${result.id} does not exist`);

  const updated = await database.address.update({
    data: result.data_update,
    where: {
      id: result.id,
    },
  });

  return new Response(200, "successfully update", updated, null, false);
};

const del = async (request) => {
  const result = await validation(addressValidation.del, request);
  const count = await database.address.count({
    where: result,
  });
  if (!count)
    throw new ResponseError(400, `address with id ${result.id} does not exist`);
  const deleted = await database.address.delete({
    where: result,
  });
  return new Response(200, "successfully deleted", deleted, null, false);
};

export default { create, getAll, getById, update, del };
