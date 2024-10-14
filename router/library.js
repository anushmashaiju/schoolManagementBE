import { Router } from 'express';
import { getLibraryHistory, addLibraryHistory, updateLibraryHistory, deleteLibraryHistory } from '../controllers/libraryController.js';

const router = Router();

// Route to get library history for a student
router.get('/:studentId', getLibraryHistory);

// Route to add new library history record
router.post('/', addLibraryHistory);

// Route to update library history record
router.put('/:id', updateLibraryHistory);

// Route to delete library history record
router.delete('/:id', deleteLibraryHistory);

export default router;
