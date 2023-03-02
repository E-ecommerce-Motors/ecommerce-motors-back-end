import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteCommentService = async (id: number) => {
  const findComment = await prisma.intermediary.findUnique({
    where: { id },
  });

  const intermediary = await prisma.intermediary.delete({
    where: { id: findComment.id },
  });

  return intermediary;
};
