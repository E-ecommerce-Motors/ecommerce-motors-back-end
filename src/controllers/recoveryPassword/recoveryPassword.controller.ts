import { Request, Response } from "express";
import { recoveryPasswordService } from "../../services/recoveryPassword/recoveryPassword.service";

export const recoveryPasswordController = async (req: Request, res: Response) => {
  const { email } = req.body

  await recoveryPasswordService(email)

  return res.json("E-mail enviado!")
};
