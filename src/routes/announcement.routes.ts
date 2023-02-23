import { Router } from 'express';
import { createAnnouncementController } from '../controllers/createAnnouncement.controller';
import { listAnnouncementController } from '../controllers/listAnnouncement.controller';

const routes = Router();

export const announcementRoutes = () => {
    routes.post("", createAnnouncementController);
    routes.get("", listAnnouncementController)
    
    return routes
}


