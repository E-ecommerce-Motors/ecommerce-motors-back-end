import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcements/createAnnouncement.controller";
import { updateAnnouncementController } from "../controllers/announcements/updateAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcements/deleteAnnouncement.controller";
import { listAnnouncementController } from "../controllers/announcements/listAnnouncement.controller";
import { idExist } from "../middlewares/ensure.middleware";
import { createCommentController } from "../controllers/comments/createComments.controller";
import { retireAnnouncementController } from "../controllers/announcements/retireAnnouncement.controller";

const routes = Router();

export const announcementRoutes = () => {
  routes.post("", createAnnouncementController);
  routes.patch("/:id", idExist, updateAnnouncementController);
  routes.delete("/:id", idExist, deleteAnnouncementController);
  routes.get("", listAnnouncementController);
  routes.get("/:id", retireAnnouncementController);

  return routes;
};
