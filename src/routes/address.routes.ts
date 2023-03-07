import { Router } from "express";

import { addressUpdateController } from "../controllers/address/updateAddress.controler";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router()

export const addressRoutes = () => {
  routes.patch("/:id", verifyAuthUserMiddleware, addressUpdateController);

  return routes;
};