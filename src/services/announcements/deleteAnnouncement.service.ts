import { prisma } from "../../utils/prisma";

export const deleteAnnouncementService = async (id: number) => {
  const updateAnnouncement = await prisma.announcement.delete({
    where: { id },
  });

  return "sucessful deleted";
};
