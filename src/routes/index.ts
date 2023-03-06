import { Express } from "express";
import { userRoutes } from "./user.routes";
import { announcementRoutes } from "./announcement.routes";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import { sessionRoutes } from "./session.routes";
import { commentRoutes } from "./comments.routes";
import { imagesRoutes } from "./imagesAnnouncement.routes";
import { recoveryPasswordRoutes } from "./recoveryPassword.routes";
import { addressRoutes } from "./address.routes";

export const appRoutes = (app: Express) => {
  app.use("/announcements", announcementRoutes());
  app.use("/user", userRoutes());
  app.use("/session", sessionRoutes());
  app.use("/announcements", commentRoutes());
  app.use("/announcements", imagesRoutes());
  app.use("/recovery", recoveryPasswordRoutes())
  app.use("/address", addressRoutes)
  app.use(handleErrorMiddleware);
};
