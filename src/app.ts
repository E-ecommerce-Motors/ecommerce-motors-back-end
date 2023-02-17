/*import { AppError } from './errors/appError';*/
import express from 'express';
import AnnouncementRoutes from './routes/AnnouncementRoutes'

const app = express();
const PORT = 3000

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

app.use('/announcements', AnnouncementRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});