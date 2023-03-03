import { Request, Response } from "express";
import { retireAnnouncementService } from "../../services/announcements/retireAnnouncement.service";

export const retireAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcement = await retireAnnouncementService(Number(req.params.id));

  return res.status(200).json(announcement);
};
