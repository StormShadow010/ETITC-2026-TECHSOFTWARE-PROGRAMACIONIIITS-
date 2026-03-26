//
import { Router } from "express";
import { UsersController } from "./users.controller";
import { validate } from "../../middleware/validate.middleware";
import { createUserSchema } from "./user.schema";
import { authMiddleware } from "../../middleware/auth.middleware";

// Router instance
const routerUsers = Router();
// Controllers instance
const _UserController = new UsersController();

// Routes
routerUsers.post(
  "/register",
  validate(createUserSchema),
  _UserController.register,
);
routerUsers.get("/all", authMiddleware, _UserController.getAllUsers);

export default routerUsers;
