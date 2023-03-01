import { AnnouncementCreateInput } from "../../interfaces/announcement";
import { prisma } from "../../utils/prisma";

export const createAnnouncementService = async (
  data: AnnouncementCreateInput
) => {
  const newAnnouncement = await prisma.announcement.create({
    data,
  });

  return newAnnouncement;
};
