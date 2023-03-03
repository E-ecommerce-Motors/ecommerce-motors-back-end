import nodemailer from 'nodemailer';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      auth: {
        user: 'seu_email@outlook.com',
        pass: 'sua_senha',
      },
    });
  }

  async sendPasswordResetEmail(email: string, token: string) {
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    const mailOptions = {
      from: 'seu_email@outlook.com',
      to: email,
      subject: 'Recuperação de senha',
      html: `
        <p>Olá,</p>
        <p>Recebemos uma solicitação de recuperação de senha para a sua conta.</p>
        <p>Para redefinir sua senha, clique no link abaixo:</p>
        <p><a href="${resetLink}">${resetLink}</a></p>
        <p>Se você não solicitou a recuperação de senha, ignore este e-mail.</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}