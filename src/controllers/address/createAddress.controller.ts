import { Request, Response } from 'express';
import { Address } from '../../interfaces/address/index'
import { addressCreateService } from '../../services/address/createAddress.service';

export const addressCreateController = async (req: Request, res: Response) => {

        const addressData: Address = req.body;

        const userId = req.user.id;

        const newAddress = await addressCreateService(addressData, userId);

        res.status(201).json(newAddress);

};