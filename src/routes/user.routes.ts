import { Router } from "express";
import { createUserController } from "../controllers/user/createuser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { idExist } from "../middlewares/ensure.middleware";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import { listYourselfController } from "../controllers/user/listYourself.controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { createSchema } from "../schema/user";

const routes = Router();

export const userRoutes = () => {
  routes.post("", createUserController);
  routes.patch(
    "/:id",
    verifyAuthUserMiddleware,
    handleErrorMiddleware,
    updateUserController
  );
  routes.delete("/:id",
    verifyAuthUserMiddleware,
    handleErrorMiddleware,
    deleteUserController
  )
  routes.get("", verifyAuthUserMiddleware, listYourselfController);

    return routes;
};
