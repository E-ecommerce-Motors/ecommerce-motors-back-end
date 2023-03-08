import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComments.controller";
import { listCommentController } from "../controllers/comments/listComment.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { editCommentService } from "../services/comments/editComment.service";

const routes = Router();

export const commentRoutes = () => {
  routes.post("/:id/comments", verifyAuthUserMiddleware, createCommentController);
  routes.get("/:id/comments", verifyAuthUserMiddleware, listCommentController);
  routes.patch("/:id/comments/:commentId", verifyAuthUserMiddleware, editCommentService)

  return routes;
};
