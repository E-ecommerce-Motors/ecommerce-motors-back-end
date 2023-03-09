import { Request, Response } from "express";
import { editCommentService } from "../../services/comments/editComment.service";

export const editCommentController = async (req: Request, res: Response) => {
  const {id, commentId } = req.params;
  const { data } = req.body;

  const updatedComment = await editCommentService(
    data,
    Number(id),
    Number(commentId)
  );

  return res.status(200).json(updatedComment);
};