import { Router } from "express"
import { AutheticateUserController } from "./controllers/AutheticateUserController";

const router = Router();
router.post("/authenticate", new AutheticateUserController().handle);

export {router}