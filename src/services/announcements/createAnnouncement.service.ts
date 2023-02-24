import { PrismaClient} from '@prisma/client';
import { AnnouncementCreateInput } from '../../interfaces/announcementCreateInput';

const prisma = new PrismaClient();

export const createAnnouncement = async (data: AnnouncementCreateInput) => {
    const newAnnouncement = await prisma.announcement.create({
        data,
        /*include: {
            announcementImgs: true,
            intermediarys: true,
        },*/
    });

    return newAnnouncement;
}