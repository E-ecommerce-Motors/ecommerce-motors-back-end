import { Router } from 'express';
import { createAnnouncementController } from '../controllers/announcement.controller';

const routes = Router();

export const announcementRoutes = () => {
    routes.post("", createAnnouncementController);
    
    return routes
}

