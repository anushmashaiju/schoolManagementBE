import FeesHistory from '../model/FeesRecord.js';

// Get fees history for a student
export const getFeesHistory = async (req, res) => {
    try {
        const feesHistory = await FeesHistory.find({ studentId: req.params.studentId });
        res.json(feesHistory);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Add new fees record
export const addFeesHistory = async (req, res) => {
    try {
        const newFeesHistory = new FeesHistory(req.body);
        await newFeesHistory.save();
        res.json(newFeesHistory);
    } catch (err) {
        res.status(400).json({ error: 'Error adding fees record' });
    }
};

// Update fees record
export const updateFeesHistory = async (req, res) => {
    try {
        const updatedFeesHistory = await FeesHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFeesHistory);
    } catch (err) {
        res.status(400).json({ error: 'Error updating fees record' });
    }
};

// Delete fees record
export const deleteFeesHistory = async (req, res) => {
    try {
        await FeesHistory.findByIdAndDelete(req.params.id);
        res.json({ message: 'Fees record deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting record' });
    }
};
