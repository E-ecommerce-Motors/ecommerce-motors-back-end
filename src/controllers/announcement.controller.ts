import { Request, Response } from "express";
import { prisma } from "../../prisma";
import { deleteAnnouncementService } from "../services/announcements/deleteAnnouncement.service";
import { updateAnnouncementService } from "../services/announcements/updateAnnouncement.service";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { body } = req;

  body.year = new Date(body.year);

  const newAnnouncement = await prisma.announcement.create({ data: body });

  res.status(201).json(newAnnouncement);
};

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

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { params } = req;

  await deleteAnnouncementService(Number(params.id));

  res.status(201);
};
