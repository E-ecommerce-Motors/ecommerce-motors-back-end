import { Request, Response } from 'express';
import { createAnnouncement } from '../../services/announcements/createAnnouncement.service';
import { AppError, handleError } from '../../errors/appError';
import { uploadImageToS3 } from '../../services/announcements/announcementImages.service';
import { prisma } from "../../../prisma/index";

export const createAnnouncementController = async (req: Request, res: Response) => {
    /*const { typeAnnouncement, title, year, mileage, price, description, typeVehicle, userId, intermediarys} = req.body;
    const images = req.files as Express.Multer.File[];*/

    try {
        /*const announcement = await createAnnouncement({
            typeAnnouncement,
            title,
            year,
            mileage,
            price,
            description,
            typeVehicle,
            userId: Number(userId),
            intermediarys: { create: intermediarys },
        });
    
        const coverImage = images.find((image) => image.fieldname === 'coverImage');
        const imageGallery = images.filter((image) => image.fieldname === 'imageGallery');
    
        const [coverImageUrl, ...imageGalleryUrls] = await Promise.all([
            uploadImageToS3(coverImage!, `announcement-images/${announcement.id}`),
            ...imageGallery.map((image) => uploadImageToS3(image, `announcement-images/${announcement.id}`)),
        ]);
    
        const announcementImagesData = [
            { announcementId: announcement.id, coverImage: coverImageUrl },
            ...imageGalleryUrls.map((url) => ({ announcementId: announcement.id, coverImage: '', imageGallery: url })),
        ];
    
        await prisma.announcementImages.createMany({ data: announcementImagesData });*/
        const announcement = await createAnnouncement(req.body)
        
        return res.status(201).json(announcement);
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}