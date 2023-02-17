import express from 'express';
import { createAnnouncement } from '../controller/AnnouncementController';

const router = express.Router();

router.post('/', createAnnouncement);

export default router;
