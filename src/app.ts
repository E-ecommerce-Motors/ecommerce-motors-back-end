import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { appRoutes } from "./routes";
import cors from "cors"

export const app = express();

app.use(express.json());

app.use(cors());

appRoutes(app);
