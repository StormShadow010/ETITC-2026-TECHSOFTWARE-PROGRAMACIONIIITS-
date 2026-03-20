import { app } from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/database";
// Boostrap the server (Start the server)
const boostrap = async () => {
  await connectDB();
  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
};

boostrap();
