import { Request, Response } from "express";
import { deleteAnnouncementService } from "../../services/announcements/deleteAnnouncement.service";

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { params } = req;

  await deleteAnnouncementService(Number(params.id));

  res.sendStatus(204);
};
