import { Request, Response } from "express";
import { listComment } from "../../services/comments/listComments.service";

export const listCommentController = async (req: Request, res: Response) => {
  const comments = await listComment(Number(req.params.id));
  return res.status(201).json(comments);
};
