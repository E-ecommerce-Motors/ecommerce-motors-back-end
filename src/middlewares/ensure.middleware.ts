import { NextFunction, Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const idExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params } = req;

  const announcement = await prisma.announcement.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!announcement) {
    res.status(404).json({ message: "Announcement not found" });
  }

  next();
};
