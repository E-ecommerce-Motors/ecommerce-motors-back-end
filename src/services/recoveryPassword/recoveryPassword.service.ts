import { AppError } from "../../errors/appError";
import { htmlBody } from "../../html";
import { prisma } from "../../utils/prisma";
import * as bcrypt from "bcryptjs"
import { sendEmail } from "../../utils/nodemailer";


export const recoveryPasswordService = async (email: string) => {
  if (email === undefined) {
    throw new AppError("E-mail não fornecido")
  }

  const user = await prisma.user.findUnique({ where: { email } })


  if (!user) {
    throw new AppError("Usuário não encontrado")
  }
  const newPassword = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)

  const passworHash = bcrypt.hashSync(newPassword, 10)

  await prisma.user.update({ where: { id: user.id }, data: { password: passworHash } })

  const html = htmlBody(newPassword, "Sua nova senha é:")

  await sendEmail({ to: email, subject: "Sua nova senha é", html })

  return true
};
