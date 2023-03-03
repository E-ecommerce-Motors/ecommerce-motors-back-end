import { Request, Response } from "express";
import { createComment } from "../../services/comments/createComments.service";

export const createCommentController = async (req: Request, res: Response) => {
  const comment = await createComment(req.body, Number(req.params.id));
  
  return res.status(201).json(comment);
};
