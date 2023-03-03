import { prisma } from "../../utils/prisma";

export const deleteUserService = async (id: number) => {
  await prisma.user.delete({
    where: { id },
  })

  return "Deletado com sucesso!";
};
