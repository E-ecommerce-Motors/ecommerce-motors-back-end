import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { EditComment } from "../../interfaces/announcement";

const prisma = new PrismaClient();

export const editCommentService = async (
  data: EditComment,
  id: number,
  commentId: number
) => {
  const comment = await prisma.comment.update({
    where: {
      id: commentId,
    },
    data,
  });

//   const intermediary = await prisma.intermediary.findMany({
//     where: { announcementId: id },
//     include: { comment: true },
//   });

  return comment;
};
