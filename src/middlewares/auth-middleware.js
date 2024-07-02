import Jwt from "jsonwebtoken";
import { ResponseError } from "../errors/responses-error.js";

const access_token = async (req, res, next) => {
  try {
    const token = await req.headers["authorization"]?.split(" ")[1];
    const decode = await Jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decode) => {
        return decode;
      }
    );
    if (!decode)
      throw new ResponseError(400, "please provided valid access_token");
    req.id = await decode.id;
    next();
  } catch (error) {
    next(error);
  }
};

export default { access_token };
