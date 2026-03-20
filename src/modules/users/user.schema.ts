//Zod para validar los datos de entrada al crear un nuevo usuario
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(4),
  email: z.email(),
  password: z.string().min(6),
});
