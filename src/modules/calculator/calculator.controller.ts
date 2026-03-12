import { Request, Response } from "express";
import { CalculatorService } from "./calculator.service";

export class CalculatorController {
  private calculatorService = new CalculatorService();

  private validateNumbers(a: any, b: any) {
    if (a === undefined || b === undefined) {
      throw new Error("Los valores a y b son obligatorios");
    }

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Los valores deben ser números");
    }
  }

  //200 OK - La solicitud se ha procesado correctamente

  add = async (req: Request, res: Response) => {
    try {
      const { a, b } = req.body;

      this.validateNumbers(a, b);

      const result = await this.calculatorService.add(a, b);

      res.status(200).json({ result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  subtract = async (req: Request, res: Response) => {
    try {
      const { a, b } = req.body;

      this.validateNumbers(a, b);

      const result = await this.calculatorService.subtract(a, b);

      res.status(200).json({ result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  multiply = async (req: Request, res: Response) => {
    try {
      const { a, b } = req.body;

      this.validateNumbers(a, b);

      const result = await this.calculatorService.multiply(a, b);

      res.status(200).json({ result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  divide = async (req: Request, res: Response) => {
    try {
      const { a, b } = req.body;

      this.validateNumbers(a, b);

      if (b === 0) {
        throw new Error("No se puede dividir por 0");
      }

      const result = await this.calculatorService.divide(a, b);

      res.status(200).json({ result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
