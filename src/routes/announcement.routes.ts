import { Router } from "express";

import { listAnnouncementController } from "../controllers/announcements/listAnnouncement.controller";
import { createAnnouncementController } from "../controllers/announcements/createAnnouncement.controller";
import { updateAnnouncementController } from "../controllers/announcements/updateAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcements/deleteAnnouncement.controller";
import { retireAnnouncementController } from "../controllers/announcements/retireAnnouncement.controller";

import { idExist } from "../middlewares/ensure.middleware";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";


const routes = Router();

export const announcementRoutes = () => {
  routes.post("", verifyAuthUserMiddleware, createAnnouncementController);
  routes.patch("/:id", verifyAuthUserMiddleware, idExist, updateAnnouncementController);
  routes.delete("/:id", verifyAuthUserMiddleware, idExist, deleteAnnouncementController);
  routes.get("", listAnnouncementController);
  routes.get("/:id", retireAnnouncementController);

  return routes;
};
