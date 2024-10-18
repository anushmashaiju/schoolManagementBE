import { Router } from 'express';
import {
  addLibraryHistory,
  getLibraryHistory,
  getAllLibraryHistory,
  updateLibraryHistory,
  deleteLibraryHistory
} from '../controllers/libraryController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const libraryRouter = Router();

// Route to add a new library history record (protected route)
libraryRouter.post('/library', verifyToken, addLibraryHistory);

// Route to get library history for a specific student (public route, can change based on your needs)
libraryRouter.get('/library/student/:studentId',verifyToken, getLibraryHistory);

// Route to get all library history (admin route, requires auth)
libraryRouter.get('/library/all',verifyToken,  getAllLibraryHistory);

// Route to update a library history record (protected route)
libraryRouter.put('/library/:id',verifyToken,  updateLibraryHistory);

// Route to delete a library history record (protected route)
libraryRouter.delete('/library/:id', verifyToken, deleteLibraryHistory);

export default libraryRouter;
