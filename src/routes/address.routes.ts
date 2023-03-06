import { Router } from "express";
import { addressCreateController } from "../controllers/address/createAddress.controller";
import { addressUpdateController } from "../controllers/address/updateAddress.controler";

const routes = Router()

export const addressRoutes = () => {
    routes.post("", addressCreateController);
    routes.patch("", addressUpdateController);

    return routes;
  };