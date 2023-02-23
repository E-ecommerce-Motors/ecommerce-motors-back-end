import { Request, Response } from "express";
import { updateAnnouncementService } from "../../services/announcements/updateAnnouncement.service";

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { body, params } = req;

  const updatedAnnouncement = await updateAnnouncementService(
    body,
    Number(params.id)
  );

  res.status(201).json(updatedAnnouncement);
};
