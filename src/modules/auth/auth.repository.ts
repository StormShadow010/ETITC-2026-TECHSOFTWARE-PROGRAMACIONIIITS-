import { getDB } from "../../config/database";
import { User } from "../users/user.model";

export class AuthRepository {
  // Aquí irían los métodos para interactuar con la base de datos relacionados con la autenticación
  private collection() {
    return getDB().collection<User>("users");
  }

  async findEmail(email: string): Promise<User | null> {
    return this.collection().findOne({ email });
  }

  async create(user: User): Promise<User> {
    const result = await this.collection().insertOne(user);
    return { _id: result.insertedId, ...user };
  }
}
