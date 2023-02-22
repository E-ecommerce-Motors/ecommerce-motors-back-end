import { Request, Response } from 'express';
import { createAnnouncement } from '../services/announcement.service';
import { AppError, handleError } from '../errors/appError';

export async function createAnnouncementController(req: Request, res: Response) {

    const { id, typeAnnouncement, title, year, mileage, price, description, typeVehicle, userId } = req.body;

    try {
        const newAnnouncement = await createAnnouncement({
            id,
            typeAnnouncement,
            title,
            year,
            mileage,
            price,
            description,
            typeVehicle,
            userId,
        });

        res.status(201).json(newAnnouncement);

    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}