import FeesHistory from '../model/FeesRecord.js';
import Student from "../model/Student.js"; 

// Get fees history for a specific student
export const getFeesHistory = async (req, res) => {
    try {
        const { studentId } = req.params; // Destructure studentId from params
        const feesHistory = await FeesHistory.find({ student: studentId }).populate('student', 'name class admissionNo');
        
        if (!feesHistory.length) {
            return res.status(404).json({ message: 'No fees history found for this student' });
        }
        
        res.json(feesHistory);
    } catch (err) {
        console.error('Error fetching fees history for student:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all fees history with populated student details
export const getAllFeesHistory = async (req, res) => {
    try {
        const feesHistory = await FeesHistory.find().populate('student', 'name class admissionNo');

        if (!feesHistory.length) {
            return res.status(404).json({ message: 'No fees history records found' });
        }

        res.json(feesHistory);
    } catch (err) {
        console.error('Error fetching fees history:', err);
        res.status(500).json({ error: 'Server error' });
    }
};



export const addFeesHistory = async (req, res) => {
    const { student: studentId, paymentDate, amount, status, feesType } = req.body;

    // Log the request body for debugging
    console.log('Request Body:', req.body);

    // Check if all required fields are provided
    if (!studentId || !feesType || !paymentDate || !amount || !status) {
        return res.status(400).json({ error: 'student, feesType, paymentDate, amount, and status are required.' });
    }

    try {
        // Fetch the student details using student ID
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }

        // Create a new fees history record
        const newFeesHistory = new FeesHistory({
            student: student._id,
            feesType,
            paymentDate,
            amount,
            status,
            studentDetails: {
                name: student.name,
                class: student.class,
                admissionNo: student.admissionNo
            }
        });

        await newFeesHistory.save();
        res.status(201).json(newFeesHistory);
    } catch (err) {
        console.error('Error adding fees record:', err);
        res.status(400).json({ error: 'Error adding fees record' });
    }
};



// Update fees record
export const updateFeesHistory = async (req, res) => {
    try {
        const updatedFeesHistory = await FeesHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!updatedFeesHistory) {
            return res.status(404).json({ error: 'Fees record not found' });
        }
        
        res.json(updatedFeesHistory);
    } catch (err) {
        console.error('Error updating fees record:', err);
        res.status(400).json({ error: 'Error updating fees record' });
    }
};

// Delete fees record
export const deleteFeesHistory = async (req, res) => {
    try {
        const deletedFeesHistory = await FeesHistory.findByIdAndDelete(req.params.id);
        
        if (!deletedFeesHistory) {
            return res.status(404).json({ error: 'Fees record not found' });
        }
        
        res.json({ message: 'Fees record deleted successfully' });
    } catch (err) {
        console.error('Error deleting fees record:', err);
        res.status(400).json({ error: 'Error deleting fees record' });
    }
};
