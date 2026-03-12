import { Router } from "express";
import { CalculatorController } from "./calculator.controller";

const routerCalculator = Router();
const controller = new CalculatorController();

routerCalculator.post("/sum", controller.add);
routerCalculator.post("/subtract", controller.subtract);
routerCalculator.post("/multiply", controller.multiply);
routerCalculator.post("/divide", controller.divide);

export default routerCalculator;
