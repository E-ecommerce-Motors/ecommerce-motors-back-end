import { prisma } from "../../utils/prisma";

export const deleteUserService = async (id: number) => {
  const deletedUser = await prisma.user.delete({
    where: { id },
  })

  return "sucessful deleted";
};
