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
  const findComment = await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
  });

  if (!findComment) {
    throw new AppError("Comentário não existente", 404);
  }

  if (id !== findComment.userId) {
    throw new AppError("Não autorizado", 401);
  }

  const comment = await prisma.comment.update({
    where: {
      id: commentId,
    },
    data,
  });

  return comment;
};
