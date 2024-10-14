import { Router } from 'express';
import { getFeesHistory, addFeesHistory, updateFeesHistory, deleteFeesHistory } from '../controllers/feesController.js';

const router = Router();

// Route to get fees history for a student
router.get('/:studentId', getFeesHistory);

// Route to add new fees record
router.post('/', addFeesHistory);

// Route to update fees record
router.put('/:id', updateFeesHistory);

// Route to delete fees record
router.delete('/:id', deleteFeesHistory);

export default router;
