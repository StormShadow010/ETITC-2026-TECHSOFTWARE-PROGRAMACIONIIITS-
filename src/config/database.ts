import { MongoClient, Db } from "mongodb";
import { env } from "./env";

let client: MongoClient;
let db: Db;

export const connectDB = async (): Promise<void> => {
  client = new MongoClient(env.mongoUri);
  await client.connect();
  db = client.db(env.mongoDbName);
  console.log("Connected to MongoDB");
};

//Patron singleton
//Funcion para obtener la instancia de la base de datos
export const getDB = (): Db => {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
};
