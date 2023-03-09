import { PrismaClient } from "@prisma/client";
import { Comment } from "../../interfaces/announcement";

const prisma = new PrismaClient();

export const createCommentService = async (data: Comment, id: number) => {
  const comment = await prisma.comment.create({
    data,
  });

  const createIntermediary = await prisma.intermediary.create({
    data: { announcementId: id, commentId: comment.id },
  });

  const intermediary = await prisma.intermediary.findMany({
    where: { announcementId: id },
    include: { comment: true },
  });

  return intermediary;
};
