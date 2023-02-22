import { Request, Response } from 'express';
import { prisma } from '../../prisma';

export const createAnnouncementController = async (req: Request, res: Response) => {
    const { body } = req

    const newAnnouncement = await prisma.announcement.create({ data: body })

    res.status(201).json(newAnnouncement);
}