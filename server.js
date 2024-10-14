import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './router/students.js';
import libraryRoutes from './router/library.js';
import feesRoutes from './router/fees.js';
import authRoutes from './router/auth.js';
import { verifyToken, isAdmin, isStaff, isLibrarian } from './middleware/authMiddleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', verifyToken, studentRoutes);  // Protected routes with token verification
app.use('/api/library-history', verifyToken, isLibrarian, libraryRoutes);
app.use('/api/fees-history', verifyToken, isStaff, feesRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
