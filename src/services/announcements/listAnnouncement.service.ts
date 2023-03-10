import { prisma } from "../../utils/prisma";

export const listAnnouncementService = async () => {
  const announcements = await prisma.announcement.findMany({
    include: { announcementImgs: true, user: true },
  });

  return announcements;
};
