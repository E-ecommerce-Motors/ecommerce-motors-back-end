import { Express } from "express"
import { handleErrorMiddleware } from "../middlewares/handleError.middleware"
import { announcementRoutes } from "./announcement.routes"

export const appRoutes = (app: Express) => {
    app.use("/announcements", announcementRoutes())
    app.use(handleErrorMiddleware)
}