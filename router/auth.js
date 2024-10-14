import { Router } from 'express';
import { login, logout } from '../controllers/authController.js';

const router = Router();

// Route for user login
router.post('/login', login);

// Route for user logout
router.post('/logout', logout);

export default router;
