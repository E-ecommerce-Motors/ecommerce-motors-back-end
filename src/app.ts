import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { appRoutes } from "./routes";

export const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

appRoutes(app);
