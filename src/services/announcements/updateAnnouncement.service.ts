import { announcement } from "../../interfaces/announcement";
import { prisma } from "../../utils/prisma";

export const updateAnnouncementService = async (
  data: announcement,
  id: number
) => {
  const updateAnnouncement = await prisma.announcement.update({
    where: { id },
    data,
    include: {
      announcementImgs: true,
    },
  });

  return updateAnnouncement;
};
