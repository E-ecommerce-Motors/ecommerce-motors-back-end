import { prisma } from "../../../prisma";
import { announcement } from "../../interfaces";

export const updateAnnouncementService = async (
  data: announcement,
  id: number
) => {
  const updateAnnouncement = await prisma.announcement.update({
    where: { id },
    data: data,
  });

  return updateAnnouncement;
};
