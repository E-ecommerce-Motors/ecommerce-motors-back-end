import { Request, Response } from 'express';
import { Address } from '../../interfaces/address/index'
import { addressCreateService } from '../../services/address/createAddress.service';

export const addressCreateController = async (req: Request, res: Response) => {

        const addressData: Address = req.body;

        const newAddress = await addressCreateService(addressData);

        res.status(201).json(newAddress);

};