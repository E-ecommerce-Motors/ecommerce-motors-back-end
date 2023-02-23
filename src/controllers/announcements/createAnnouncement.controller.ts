import { Request, Response } from "express";
import { prisma } from "../../../prisma";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { body } = req;

  body.year = new Date(body.year);

  const newAnnouncement = await prisma.announcement.create({ data: body });

  res.status(201).json(newAnnouncement);
};
