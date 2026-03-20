import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/myapp",
  mongoDbName: process.env.MONGO_DB_NAME || "myapp",
};
