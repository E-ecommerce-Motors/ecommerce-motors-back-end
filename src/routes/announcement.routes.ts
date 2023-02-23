import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  updateAnnouncementController,
} from "../controllers/announcement.controller";
import { idExist } from "../middlewares/ensure.middleware";

const routes = Router();

export const announcementRoutes = () => {
  routes.post("", createAnnouncementController);
  routes.patch("/:id", idExist, updateAnnouncementController);
  routes.delete("/:id", idExist, deleteAnnouncementController);

  return routes;
};
