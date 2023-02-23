import "express-async-errors";
import "reflect-metadata";
import express from 'express';
import { appRoutes } from "./routes";

export const app = express();

app.use(express.json())

appRoutes(app)