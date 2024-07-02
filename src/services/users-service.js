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

export default { create, login, verifToken };
