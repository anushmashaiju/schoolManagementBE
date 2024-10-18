import Student from "../model/Student.js";

// Add new student(s)
export const addStudent = async (req, res) => {
  try {
    const studentsData = Array.isArray(req.body) ? req.body : [req.body]; // Check if req.body is an array
    const students = await Student.insertMany(studentsData);

    res.status(201).json({
      message: `${students.length} student(s) added successfully`,
      students,
    });
  } catch (err) {
    res.status(400).json({ error: "Error adding student(s)" });
  }
};


// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


// Update student
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: "Error updating student" });
  }
};

// Delete student
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting student" });
  }
};

export const getStudentByAdmissionNo = async (req, res) => {
  try {
    console.log("Request Params:", req.params); // Log request params for debugging
    const admissionNo = req.params.admissionNo; // Extract admission number
    const student = await Student.findOne({ admissionNo: admissionNo });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    console.error("Error fetching student:", err); // Log the error
    res.status(500).json({ error: "Server error" });
  }
};


