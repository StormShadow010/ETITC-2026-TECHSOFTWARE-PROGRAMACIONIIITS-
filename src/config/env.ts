import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/myapp",
  mongoDbName: process.env.MONGO_DB_NAME || "myapp",
  jwtSecret:
    process.env.JWT_SECRET ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
  jwtExpiration: process.env.JWT_EXPIRATION || "10h",
};
