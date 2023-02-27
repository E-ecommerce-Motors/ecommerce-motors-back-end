import { AnnouncementCreateInput } from '../../interfaces/announcement';
import { prisma } from '../../utils/prisma';

export const createAnnouncementService = async (data: AnnouncementCreateInput) => {
    const newAnnouncement = await prisma.announcement.create({
        data,
        /*include: {
            announcementImgs: true,
            intermediarys: true,
        },*/
    });

    return newAnnouncement;
}