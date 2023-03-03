import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComments.controller";
import { listCommentController } from "../controllers/comments/listComment.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router();

export const commentRoutes = () => {
  routes.post("/:id/comments", verifyAuthUserMiddleware, createCommentController);
  routes.get("/:id/comments", verifyAuthUserMiddleware, listCommentController);

  return routes;
};
