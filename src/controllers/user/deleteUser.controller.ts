import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { deleteAnnouncementService } from "../../services/announcements/deleteAnnouncement.service";
import { deleteUserService } from "../../services/user/deleteUser.service";

export const deleteUserController = async (
  req: Request,
  res: Response
) => {
  const { params, user } = req;
  const userId = Number(params.id);

  if (userId !== parseInt(user.id)) {
    throw new AppError("Unauthorized", 401);
  }
  await deleteUserService(Number(params.id));

  res.sendStatus(204);
};
