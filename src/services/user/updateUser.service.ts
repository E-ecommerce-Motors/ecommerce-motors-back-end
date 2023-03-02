import * as bcrypt from "bcryptjs";
import { AppError } from "../../errors/appError";
import { IUserRequest, IUserUpdate } from "../../interfaces/user";
import { prisma } from "../../utils/prisma";

export const updateUserService = async (data: IUserUpdate, id: number) => {


if (data.email) {
  const emailExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (emailExists) {
    throw new AppError("E-mail já está cadastrado");
  }
}

const updateUser = await prisma.user.update({
where: {
id: id,
},
data: {
name: data.name,
email: data.email,
cpf: data.cpf,
phone: data.phone,
birthDate: data.birthDate,
description: data.description,
  // updatedAt: new Date(),
},
});

return { ...updateUser };
};