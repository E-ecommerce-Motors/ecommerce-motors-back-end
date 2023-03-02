import { Router } from "express";
import { updateAnnouncementImagesController } from "../controllers/images/udpateImages.controller";

const routes = Router();

export const imagesRoutes = () => {
  routes.patch("/:id/images", updateAnnouncementImagesController);

  return routes;
};
