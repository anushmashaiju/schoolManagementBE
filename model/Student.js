import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    admissionNo: { type: Number, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    parentName: { type: String, required: true },
    contactNo: { type: String, required: true }, // Changed to String
    place: { type: String, required: true },
    dateOfJoining: { type: Date, default: Date.now }, // Default to current date
    // Add your fields here
});

// Optional: Add indexes for optimization if needed
studentSchema.index({ admissionNo: 1 });

const Student = mongoose.model('Student', studentSchema);

// Default export
export default Student;
