import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComments.service";

export const createCommentController = async (req: Request, res: Response) => {
  const comment = await createCommentService(req.body, Number(req.params.id));

  return res.status(201).json(comment);
};
