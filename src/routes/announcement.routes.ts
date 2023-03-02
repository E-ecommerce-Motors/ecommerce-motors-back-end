import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcements/createAnnouncement.controller";
import { updateAnnouncementController } from "../controllers/announcements/updateAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcements/deleteAnnouncement.controller";
import { listAnnouncementController } from "../controllers/announcements/listAnnouncement.controller";
import { idExist } from "../middlewares/ensure.middleware";
import { createCommentController } from "../controllers/comments/createComments.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router();

export const announcementRoutes = () => {
  routes.post("", verifyAuthUserMiddleware, createAnnouncementController);
  routes.patch("/:id", verifyAuthUserMiddleware, idExist, updateAnnouncementController);
  routes.delete("/:id", verifyAuthUserMiddleware, idExist, deleteAnnouncementController);
  routes.get("", listAnnouncementController);

  return routes;
};
