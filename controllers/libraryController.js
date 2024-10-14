import LibraryHistory from '../model/LibraryRecord.js';

// Get library history for a student
export const getLibraryHistory = async (req, res) => {
    try {
        const libraryHistory = await LibraryHistory.find({ studentId: req.params.studentId });
        res.json(libraryHistory);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Add new library history
export const addLibraryHistory = async (req, res) => {
    try {
        const newHistory = new LibraryHistory(req.body);
        await newHistory.save();
        res.json(newHistory);
    } catch (err) {
        res.status(400).json({ error: 'Error adding library record' });
    }
};

// Update library history
export const updateLibraryHistory = async (req, res) => {
    try {
        const updatedHistory = await LibraryHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedHistory);
    } catch (err) {
        res.status(400).json({ error: 'Error updating library record' });
    }
};

// Delete library history
export const deleteLibraryHistory = async (req, res) => {
    try {
        await LibraryHistory.findByIdAndDelete(req.params.id);
        res.json({ message: 'Library record deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting record' });
    }
};
