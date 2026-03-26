import { Router } from "express";
import AuthRouter from "../../modules/auth/auth.routes";
import UserRouter from "../../modules/users/users.routes";

const router = Router();

console.log("AuthRouter:", AuthRouter);
console.log("UserRouter:", UserRouter);

router.use("/auth", AuthRouter);
router.use("/users", UserRouter);

export default router;
