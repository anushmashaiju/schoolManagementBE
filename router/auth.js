import express  from "express"
import {  userLogin, userRegister } from '../controllers/authController.js';

const userRouter = express.Router();

// Route for user login
// router.post('/login', login);

// // Route for user logout
// router.post('/logout', logout);

userRouter.post("/user-register", userRegister)
userRouter.post("/user-login", userLogin)

export default userRouter;
