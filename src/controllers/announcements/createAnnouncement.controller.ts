import { Request, Response } from 'express';
import { createAnnouncementService } from '../../services/announcements/createAnnouncement.service';
import { AnnouncementCreateInput } from '../../interfaces/announcement';

export const createAnnouncementController = async (req: Request, res: Response) => {
  const data: AnnouncementCreateInput = req.body;
  const newAnnouncement = await createAnnouncementService(data);
  
  return res.status(201).json(newAnnouncement);
};