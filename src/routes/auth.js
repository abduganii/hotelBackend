import express from "express";
const router = express.Router();

import { UserController } from "../controllers/index.js";
import chechAuth from "../utils/chechAuth.js";
import { loginValidation, registerValidation } from "../validations.js"


router
    .post('/login',loginValidation,UserController.login)
    .post('/registor', registerValidation, UserController.registor)
    .get('/me', chechAuth, UserController.getUser)

export default router;