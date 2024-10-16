import express  from "express"
import {  userRegister } from '../controllers/authController.js';

const userRouter = express.Router();

// Route for user login
// router.post('/login', login);

// // Route for user logout
// router.post('/logout', logout);

userRouter.post("/user-register", userRegister)

export default userRouter;
