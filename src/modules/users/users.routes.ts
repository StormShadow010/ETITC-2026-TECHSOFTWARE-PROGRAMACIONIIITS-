//
import { Router } from "express";
import { UsersController } from "./users.controller";

// Router instance
const routerUsers = Router();
// Controllers instance
const _UserController = new UsersController();

// Routes
routerUsers.post("/register", _UserController.register);

export default routerUsers;
