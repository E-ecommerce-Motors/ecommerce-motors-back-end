import { prisma } from "../../utils/prisma";

export const updateAnnouncementImageService = async (data: any, id: number) => {
  const updateAnnouncementImage = await prisma.announcementImages.update({
    where: { id },
    data,
  });
  return updateAnnouncementImage;
};
