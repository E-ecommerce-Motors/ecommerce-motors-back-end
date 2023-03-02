import { Express } from "express";
import { userRoutes } from "./user.routes";
import { announcementRoutes } from "./announcement.routes";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import { sessionRoutes } from "./session.routes";
import { commentRoutes } from "./comments.routes";

export const appRoutes = (app: Express) => {
  app.use("/announcements", announcementRoutes());
  app.use("/user", userRoutes());
  app.use("/session", sessionRoutes());
  app.use("/announcements", commentRoutes());
  app.use(handleErrorMiddleware);
};
