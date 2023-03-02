import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComments.controller";
import { listCommentController } from "../controllers/comments/listComment.controller";

const routes = Router();

export const commentRoutes = () => {
  routes.post("/:id/comments", createCommentController);
  routes.get("/:id/comments", listCommentController);

  return routes;
};
