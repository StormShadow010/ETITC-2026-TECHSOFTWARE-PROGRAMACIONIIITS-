import { UserRepository } from "./user.repository";

//Lógica de negocio para los usuarios
export class UsersService {
  private repositoryMongo = new UserRepository();
  //Registro de un nuevo usuario
  async register(data: any) {
    const exists = await this.repositoryMongo.findByEmail(data.email);
    if (exists) {
      throw new Error("El usuario ya está registrado");
    }
    const newUser = await this.repositoryMongo.create(data);
    return { message: "Usuario registrado exitosamente", newUser };
  }
  //Obtener todos los usuarios
  async getAllUsers() {
    const users = await this.repositoryMongo.findAll();
    return users;
  }
}
