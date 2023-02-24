import { Express } from "express"
import { announcementRoutes } from "./announcement.routes"
import { handleErrorMiddleware } from "../middlewares/handleError.middleware"

export const appRoutes = (app: Express) => {
    app.use("/announcements", announcementRoutes())
    app.use(handleErrorMiddleware)
}