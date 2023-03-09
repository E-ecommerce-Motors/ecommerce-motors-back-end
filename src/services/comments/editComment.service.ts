import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { EditComment } from "../../interfaces/announcement";
import { AppError } from "../../errors/appError";

const prisma = new PrismaClient();

export const editCommentService = async (
  data: EditComment,
  commentId: number,
  announcementId: number,
  id: number
) => {

  const findComment = await prisma.address.findUnique({
    where: {
            id
    },
})

if (!findComment) {
  throw new AppError("comment", 404)
}

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
