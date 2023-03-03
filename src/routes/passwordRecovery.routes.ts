import { Router } from "express";
import { AuthController } from "../controllers/recoveryPassword/authRecovery.controller";

const routes = Router();

const authController = new AuthController();

export const passwordRecoveryRoutes = () => {
    
    routes.post('/forgot-password', authController.forgotPassword);

    return routes;
};