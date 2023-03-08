import { Request, Response } from 'express';
import { IAddress } from '../../interfaces/address/index'
import { addressUpdateService } from '../../services/address/updateAddress.service'; 

export const addressUpdateController = async (req: Request, res: Response) => {
        const { id } = req.user;
        
        const addressData: IAddress = req.body;

        const address = await addressUpdateService(id, addressData);

        res.status(201).json(address);
};