import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../shared/types/auth-request";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Token requerido",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token requerido",
      });
    }
    const payload = verifyToken(token);

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido o expirado",
    });
  }
};
