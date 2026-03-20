//Request - Response
import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  constructor() {}

  private userService = new UsersService();

  register = async (req: Request, res: Response) => {
    const result = await this.userService.register(req.body);
    res.status(201).json(result);
  };

  getAllUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    res.status(200).json(users);
  };
}
