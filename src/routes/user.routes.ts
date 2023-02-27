import { Router } from "express";
import { createUserController } from "../controllers/user/createuser.controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { createSchema } from "../schema/user";

const routes = Router();

export const userRoutes = () => {
    routes.post("", createUserController);


    return routes;
};
