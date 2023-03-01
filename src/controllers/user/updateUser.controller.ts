import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (
    req: Request,
    res: Response,
  ) => {
    const { body, params, user } = req;
    const userId = Number(params.id);
  
    if (userId !== parseInt(user.id)) {
      throw new AppError("Unauthorized", 401);
    }
  
    const updatedUser = await updateUserService(body, userId);
  
    return res.status(200).json(updatedUser);
  };