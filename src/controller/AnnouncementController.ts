import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();
const { announcement } = prisma;

export async function createAnnouncement(req: Request, res: Response) {
    try{
        const {body} = req
        
        const newAnnouncement = await announcement.create({ data: body})
    
        res.status(201).json(newAnnouncement);
    }catch(error){
    
        console.error('Erro ao criar novo anúncio:', error);
    
        res.status(500).json({error: 'Erro ao criar novo anúncio'});
    }
}