import { Request, Response } from "express";
import { listCommentService } from "../../services/comments/listComments.service";

export const listCommentController = async (req: Request, res: Response) => {
  const comments = await listCommentService(Number(req.params.id));

  return res.status(201).json(comments);
};
