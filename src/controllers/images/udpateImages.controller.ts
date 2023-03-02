import { Request, Response } from "express";
import { updateAnnouncementImageService } from "../../services/images/updateImage.service";

export const updateAnnouncementImagesController = async (
  req: Request,
  res: Response
) => {
  const { body, params } = req;

  const updatedAnnouncementImages = await updateAnnouncementImageService(
    body,
    Number(params.id)
  );

  res.status(201).json(updatedAnnouncementImages);
};
