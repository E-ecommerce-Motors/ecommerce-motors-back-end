import { PrismaClient } from "@prisma/client";
import { Comment } from "../../interfaces/announcement";

const prisma = new PrismaClient();

export const listCommentService = async (id: number) => {
  const intermediary = await prisma.intermediary.findMany({
    where: { announcementId: id },
    include: { comment: true },
  });

  return intermediary;
};
