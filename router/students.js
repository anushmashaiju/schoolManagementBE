import { Router } from 'express';
import { getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';

const router = Router();

// Route to get all students
router.get('/', getAllStudents);

// Route to get a student by ID
router.get('/:id', getStudentById);

// Route to add a new student
router.post('/', addStudent);

// Route to update a student
router.put('/:id', updateStudent);

// Route to delete a student
router.delete('/:id', deleteStudent);

export default router;
