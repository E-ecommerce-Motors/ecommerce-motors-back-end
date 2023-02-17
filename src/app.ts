import { Request, Response, NextFunction } from 'express';
/*import { AppError } from './errors/appError';*/

const express = require('express');
const app = express();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const { Announcement } = prisma

app.use(express.json())

/*app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  });*/

app.post('/announcements', async (req: Request, res: Response) => {
  try{
    const {body} = req
    
    const newAnnouncement = await Announcement.create({ data: body})

    res.status(201).json(newAnnouncement);
  }catch(error){

    console.error('Erro ao criar novo anúncio:', error);

    res.status(500).json({error: 'Erro ao criar novo anúncio'});
  }
})

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});