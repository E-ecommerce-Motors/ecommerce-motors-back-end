import { prisma } from "../../utils/prisma";
import { announcement } from "../../interfaces/announcement";

export const updateAnnouncementService = async (data: announcement,id: number) => {
  const updateAnnouncement = await prisma.announcement.update({
    where: { id },
    data,
    include: {
      announcementImgs: true,
    },
  });

  return updateAnnouncement;
};
