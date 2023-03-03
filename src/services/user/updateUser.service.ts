import * as bcrypt from "bcryptjs";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/user";
import { prisma } from "../../utils/prisma";

export const updateUserService = async (data: IUserRequest, userId: number) => {
  const findUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (findUser) {
    throw new AppError("E-mail já está cadastrado");
  }
  const updateUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      birthDate: data.birthDate,
      description: data.description,
      typeAccount: data.typeAccount,
      isSaler: data.isSaler,
      password: bcrypt.hashSync(data.password, 10),

      updatedAt: new Date(),
    },
  });

  return { ...updateUser, password: undefined };
};
