import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

import routerUsers from "./modules/users/users.routes";
import routerCalculator from "./modules/calculator/calculator.routes";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

// Importing routes
app.use("/api/users", routerUsers);
app.use("/api/calculator", routerCalculator);
