//
import { Router } from "express";
import { UsersController } from "./users.controller";
import { validate } from "../../middleware/validate.middleware";
import { createUserSchema } from "./user.schema";

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
routerUsers.get("/all", _UserController.getAllUsers);

export default routerUsers;
