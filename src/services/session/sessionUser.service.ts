import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user";

const prisma = new PrismaClient();

export const sessionUserService = async ({ email, password }: IUserLogin) => {
    const account = await prisma.user.findUnique({
        where: { email },
        select: { password: true, isSaler: true, id: true },
    });

    if (!account) {
        throw new AppError("Conta não encontrada", 403);
    }
    if (!bcrypt.compareSync(password, account.password)) {
        throw new AppError("E-mail ou senha incorretos", 403);
    }

    const token = jwt.sign(
        { email: email, isAdm: account.isSaler, id: account.id },
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
        }
    );

    return token;
};
