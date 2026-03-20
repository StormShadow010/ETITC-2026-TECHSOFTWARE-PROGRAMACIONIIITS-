//Configuración hacia la base de datos
import { getDB } from "../../config/database";

export class UserRepository {
  private collection() {
    return getDB().collection("users");
  }
  //Create
  async create(data: any) {
    const result = await this.collection().insertOne(data);
    return { id: result.insertedId, ...data };
  }

  //Read
  async findByEmail(email: string) {
    return await this.collection().findOne({ email });
  }

  //All users
  async findAll() {
    return await this.collection().find().toArray();
  }
}
