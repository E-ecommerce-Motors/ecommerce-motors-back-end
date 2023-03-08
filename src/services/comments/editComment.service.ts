import { AppError } from "../../errors/appError";
import { prisma } from "../../utils/prisma";

export const editCommentService = async (id: number, data: any) => {
  const findComment = await prisma.comment.findUnique({
    where: {
      id,
    },
  });

  if (!findComment) {
    throw new AppError("Comentário não encontrado", 404);
  }

//   const intermediaryUpdate = await prisma.intermediary.update({
//     where{id: Number(id)} ,
//     data,
//   });
//   return intermediaryUpdate;
};
