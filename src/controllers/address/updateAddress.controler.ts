import { Request, Response } from 'express';
import { addressUpdateService } from '../../services/address/updateAddress.service'; 
import { IAddress } from '../../interfaces/address/index'

export const addressUpdateController = async (req: Request, res: Response) => {
        const { id } = req.params;
        const addressData: IAddress = req.body;

        const address = await addressUpdateService(Number(id), addressData);

        res.status(201).json(address);
};