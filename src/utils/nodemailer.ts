import "dotenv/config";

import { createTransport } from "nodemailer";
import { AppError } from "../errors/AppError";
import { IEmailRequest } from "../interfaces/email";

export const sendEmail = async ({ to, subject, html, text }: IEmailRequest) => {
  const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PWD,
    },
  });

  await transporter
    .sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: html || text,
    })
    .then(() => {
      console.log("E-mail enviado com sucesso!");
    })
    .catch((error) => {
      throw new AppError(`Ocorreu um erro ${error}`, 403);
    });
};

