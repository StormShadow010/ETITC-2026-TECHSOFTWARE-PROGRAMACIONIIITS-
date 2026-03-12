//Request - Response
import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  constructor() {}

  private userService = new UsersService();

  register = async (req: Request, res: Response) => {
    const result = await this.userService.register();
    res.status(201).json(result);
  };
}
