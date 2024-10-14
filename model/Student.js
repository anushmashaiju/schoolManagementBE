import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    admissionNo: Number,
    dateOfBirth:  Date ,
    parentName: String,
    place: String,
    dateOfJoining:  Date ,
    // Add your fields here
});

const Student = mongoose.model('Student', studentSchema);

// Default export
export default Student;
