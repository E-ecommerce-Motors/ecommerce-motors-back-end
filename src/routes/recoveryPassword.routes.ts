import { Router } from "express"

import { recoveryPasswordController } from "../controllers/recoveryPassword/recoveryPassword.controller"

const routes = Router()

export const recoveryPasswordRoutes = () => {
  routes.post("", recoveryPasswordController)

  return routes
}