import express from "express";
import usersController from "../controllers/users-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import productsController from "../controllers/products-controller.js";
import addressController from "../controllers/address-controller.js";
import ordersController from "../controllers/orders-controller.js";

const router = express.Router();
router.post("/users", usersController.create);
router.post("/users/login", usersController.login);
router.get(
  "/users/verify-token",
  authMiddleware.access_token,
  usersController.verifToken
);
router.get("/users", authMiddleware.access_token, usersController.getProfile);
router.put(
  "/users/password",
  authMiddleware.access_token,
  usersController.resetPassword
);
router.put(
  "/users/name",
  authMiddleware.access_token,
  usersController.updateName
);

router.post(
  "/products",
  authMiddleware.access_token,
  productsController.create
);
router.put("/products", authMiddleware.access_token, productsController.update);
router.delete("/products", authMiddleware.access_token, productsController.del);

router.post("/address", authMiddleware.access_token, addressController.create);
router.get("/address", authMiddleware.access_token, addressController.get);
router.put("/address", authMiddleware.access_token, addressController.update);
router.delete("/address", authMiddleware.access_token, addressController.del);

router.post("/orders", authMiddleware.access_token, ordersController.create);
router.get("/orders", authMiddleware.access_token, ordersController.get);

export default router;
