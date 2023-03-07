import { Request, Response } from 'express';
import { Address } from '../../interfaces/address/index'
import { addressCreateService } from '../../services/address/createAddress.service';

export const addressCreateController = async (req: Request, res: Response) => {

        const addressData: Address = req.body;

        const {id} = req.params

        const newAddress = await addressCreateService(addressData, Number(id));

        res.status(201).json(newAddress);

};