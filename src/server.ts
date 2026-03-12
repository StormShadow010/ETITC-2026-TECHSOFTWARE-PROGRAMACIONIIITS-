import { app } from "./app";
import { env } from "./config/env";
// Boostrap the server (Start the server)
const boostrap = async () => {
  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
};

boostrap();
