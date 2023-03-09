import { Request, Response } from "express";
import { editCommentService } from "../../services/comments/editComment.service";

export const editCommentController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { data } = req.body;
  const {announcementId, commentId} = req.params 

  const updatedComment = await editCommentService(
    data,
    Number(commentId),
    Number(announcementId),
    Number(id)
  );

  return res.status(200).json(updatedComment);
};