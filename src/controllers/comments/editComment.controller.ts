import { Request, Response } from "express";
import { editCommentService } from "../../services/comments/editComment.service";

const editCommentController = async (req: Request, res: Response) => {
    const {id} = req.params
    const {data} = req.body

    const editedComment = await editCommentService(
        Number(id), data
      );

      return res.status(200).json(editedComment)
}