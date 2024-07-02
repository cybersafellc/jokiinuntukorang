import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import errorMiddleware from "../middlewares/error-middleware.js";
import usersRouter from "../routes/users.js";
import publicRouter from "../routes/public.js";

export const web = express();
web.use(cors());
web.use(cookieParser());
web.use(bodyParser.json());
web.use(usersRouter);
web.use(publicRouter);
web.use(errorMiddleware.notFound);
web.use(errorMiddleware.errorHandler);
