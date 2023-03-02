import { Router } from "express";

import { createSchema } from "../schema/user";

import { createUserController } from "../controllers/user/createuser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { listYourselfController } from "../controllers/user/listYourself.controller";

import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("", createUserController);
  routes.patch(
    "/:id",
    verifyAuthUserMiddleware,
    updateUserController
  );
  routes.delete("/:id",
    verifyAuthUserMiddleware,
    deleteUserController
  )
  routes.get("", verifyAuthUserMiddleware, listYourselfController);

  return routes;
};
