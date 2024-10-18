import { Router } from 'express';
import {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudentByAdmissionNo
} from '../controllers/studentController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const studentRouter = Router();

// Route to get all students (public route)
studentRouter.get('/student', getAllStudents);

// Route to get a student by ID (public route)
studentRouter.get('/student/:id', getStudentById);

// Route to add a new student (protected route)
studentRouter.post('/add-student', verifyToken, addStudent);

// Route to update a student (protected route)
studentRouter.put('/student/:id', verifyToken, updateStudent);

// Route to delete a student (protected route)
studentRouter.delete('/student/:id', verifyToken, deleteStudent);

// Route to get a student by admission number (public route)
studentRouter.get('/student/admission/:admissionNo', getStudentByAdmissionNo);

export default studentRouter;
