import { Router } from 'express';
import {
    getFeesHistory,
    addFeesHistory,
    updateFeesHistory,
    deleteFeesHistory,
    getAllFeesHistory,
} from '../controllers/feesController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const feeRouter = Router();

// Route to get fees history for a student (protected)
feeRouter.get('/fees/student/:studentId', verifyToken, getFeesHistory);

// Get all students' fees history (protected)
feeRouter.get('/fees/all', verifyToken, getAllFeesHistory);

// Route to add new fees record (protected)
feeRouter.post('/fees', verifyToken, addFeesHistory);

// Route to update fees record (protected)
feeRouter.put('/fees/:id', verifyToken, updateFeesHistory);

// Route to delete fees record (protected)
feeRouter.delete('/fees/:id', verifyToken, deleteFeesHistory);

export default feeRouter;
