import { PrismaClient, Announcement } from '@prisma/client';

const prisma = new PrismaClient();

export const createAnnouncement = async (announcementData: Announcement) => {
    const newAnnouncement = await prisma.announcement.create({
        data: announcementData,
        include: {
        user: true,
        intermediarys: true,
        announcementImgs: true,
        },
    });
return newAnnouncement;
}