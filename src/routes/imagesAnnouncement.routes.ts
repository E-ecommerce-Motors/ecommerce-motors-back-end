import { Router } from "express";
import { updateAnnouncementImagesController } from "../controllers/images/udpateImages.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router();

export const imagesRoutes = () => {
  routes.patch("/:id/images", verifyAuthUserMiddleware, updateAnnouncementImagesController);

  return routes;
};
