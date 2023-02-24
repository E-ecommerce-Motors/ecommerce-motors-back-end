import { Request, Response } from "express";
import { listAnnouncementService } from "../services/listAnnouncement.service";

export const listAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcements = await listAnnouncementService();

  return res.status(200).json(announcements);
};
