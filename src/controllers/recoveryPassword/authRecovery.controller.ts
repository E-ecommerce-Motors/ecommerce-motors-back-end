import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { EmailService } from '../../services/recoveryPassword/emailRecovery.service'; 

const prisma = new PrismaClient();
const emailService = new EmailService();

export class AuthController {
  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    // Gerar token de recuperação de senha e salvá-lo no banco de dados

    // Enviar e-mail de recuperação de senha
    try {
      // Deixei o token entre string, porque teoricamente, teria que armazenar essa senha para o banco de dados
      await emailService.sendPasswordResetEmail(email, "token");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao enviar e-mail de recuperação de senha' });
    }

    return res.json({ message: 'E-mail de recuperação de senha enviado' });
  }
}