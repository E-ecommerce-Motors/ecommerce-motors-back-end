import { Router } from "express";
import { addressCreateController } from "../controllers/address/createAddress.controller";
import { addressUpdateController } from "../controllers/address/updateAddress.controler";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router()

export const addressRoutes = () => {
  routes.post("", addressCreateController);
  routes.patch("/:id", verifyAuthUserMiddleware, addressUpdateController);

  return routes;
};