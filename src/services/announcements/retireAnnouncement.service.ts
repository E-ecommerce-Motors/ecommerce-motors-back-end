import { prisma } from "../../utils/prisma";

export const retireAnnouncementService = async (id: number) => {
  const announcements = await prisma.announcement.findUnique({
    where: { id },
    include: {
      announcementImgs: true,
      intermediarys: {
        include: {
          comment: {
            include: {
              user: true,
            },
          },
        },
      },
      user: true,
    },
  });

  return announcements;
};
