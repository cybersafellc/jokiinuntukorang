import { database } from "../app/database.js";
import { ResponseError } from "../errors/responses-error.js";
import usersValidation from "../validations/users-validation.js";
import validation from "../validations/validation.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { Response } from "../app/response.js";
import Jwt from "jsonwebtoken";
const key = process.env.KEY_USER;

const create = async (request) => {
  const result = await validation(usersValidation.create, request);
  if (key !== result.key) throw new ResponseError(400, "key invalid");
  const count = await database.users.count({
    where: {
      username: result.username,
    },
  });
  if (count) throw new ResponseError(400, "username already exist");
  result.id = crypto.randomUUID();
  result.password = await bcrypt.hash(result.password, 10);
  result.key = undefined;
  const created = await database.users.create({
    data: result,
    select: {
      username: true,
    },
  });
  return new Response(200, "successfully created", created, null, false);
};

const login = async (request) => {
  const result = await validation(usersValidation.login, request);
  const user = await database.users.findFirst({
    where: {
      username: result.username,
    },
  });
  if (user && (await bcrypt.compare(result.password, user.password))) {
    const access_token = await Jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "8h" }
    );
    return new Response(
      200,
      "successfully login",
      { access_token },
      null,
      false
    );
  }
  throw new ResponseError(400, "username and password not match");
};

const verifToken = async () => {
  return new Response(200, "token verified", null, null, false);
};

const getProfile = async (request) => {
  const result = await validation(usersValidation.getProfile, request);
  const user = await database.users.findUnique({
    where: {
      id: result.id,
    },
    select: {
      id: true,
      username: true,
      first_name: true,
      last_name: true,
    },
  });
  if (!user) throw new ResponseError(400, "users does not exist");
  return new Response(200, "successfully get", user, null, false);
};

const resetPassword = async (request) => {
  const result = await validation(usersValidation.resetPassword, request);
  const user = await database.users.findUnique({
    where: {
      id: result.id,
    },
  });
  if (!user) throw new ResponseError(400, "user does not exist");
  if (await bcrypt.compare(result.current_password, user.password)) {
    result.new_password = await bcrypt.hash(result.new_password, 10);
    const updated = await database.users.update({
      data: {
        password: result.new_password,
      },
      where: {
        id: result.id,
      },
      select: {
        username: true,
      },
    });
    return new Response(
      200,
      "successfully update password",
      updated,
      null,
      false
    );
  }
  throw new ResponseError(400, "current_password is wrong");
};

const updateName = async (request) => {
  const result = await validation(usersValidation.updateName, request);
  console.log(result);
  const count = await database.users.count({
    where: {
      id: result.id,
    },
  });
  if (!count) throw new ResponseError(400, "user does not exist");
  const updated = await database.users.update({
    data: {
      first_name: result.first_name,
      last_name: result.last_name,
    },
    where: {
      id: result.id,
    },
    select: {
      username: true,
      first_name: true,
      last_name: true,
    },
  });
  return new Response(200, "successfully update name", updated, null, false);
};

export default {
  create,
  login,
  verifToken,
  getProfile,
  resetPassword,
  updateName,
};
