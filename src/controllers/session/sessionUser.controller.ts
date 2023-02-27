import { Request, Response } from "express";
import { sessionUserService } from "../../services/session/sessionUser.service";

export const sessionUserController = async (req: Request, res: Response) => {

  const token = await sessionUserService(req.body);

  return res.status(200).json({ token });
};

