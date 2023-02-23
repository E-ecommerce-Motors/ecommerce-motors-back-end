import { Router } from "express";
import { createAnnouncementController } from "../controllers/createAnnouncement.controller";
import { idExist } from "../middlewares/ensure.middleware";
import { listAnnouncementController } from "../controllers/listAnnouncement.controller";
import { updateAnnouncementController } from "../controllers/updateAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/deleteAnnouncement.controller";

const routes = Router();

export const announcementRoutes = () => {
  routes.post("", createAnnouncementController);
  routes.patch("/:id", idExist, updateAnnouncementController);
  routes.delete("/:id", idExist, deleteAnnouncementController);
  routes.get("", listAnnouncementController);

  return routes;
};
