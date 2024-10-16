import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import studentRoutes from "./router/students.js";
import libraryRoutes from "./router/library.js";
import feesRoutes from "./router/fees.js";
import authRoutes from "./router/auth.js";
import connectDB from "./config/db.js";

import {
  verifyToken,
  isAdmin,
  isStaff,
  isLibrarian,
} from "./middleware/authMiddleware.js";
import userRouter from "./router/auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", userRouter);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
