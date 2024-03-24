const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;
const MongooseConnect =
  "mongodb+srv://armaan:Armaan25@cluster0.ozk8zhj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());
app.use(express.json());
mongoose
  .connect(MongooseConnect, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

// Schema for Teacher
const teacherSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

// Create models based on the schemas
const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);
// Endpoint to create a student user
app.post("/create-student-user", async (req, res) => {
  try {
    const { email, name, motherName, fatherName, role } = req.body;
    const newUser = new Student({
      email,
      name,
      motherName,
      fatherName,
      role, // Set role as student
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to create a teacher user
app.post("/create-teacher-user", async (req, res) => {
  try {
    const { email, name, schoolName, code, role } = req.body;
    const newUser = new Teacher({
      email,
      name,
      schoolName,
      code,
      role,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to get student data by name
app.get("/get-student-data/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const student = await Student.findOne({ name, role: "student" });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get teacher data by name
app.get("/get-teacher-data/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const teacher = await Teacher.findOne({ name, role: "teacher" });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find({ role: "student" });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Schema for Class
const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
    unique: true,
  },
  classCode: {
    type: String,
    required: true,
    unique: true,
  },
  students: {
    type: [String],
    default: [],
  },
});

// Create model for Class
const Class = mongoose.model("Class", classSchema);

// Endpoint to create a class
app.post("/create-class", async (req, res) => {
  try {
    const { className, classCode } = req.body;
    // Create a new class document
    const newClass = new Class({
      className,
      classCode,
    });
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to get all students of a class by class code
app.get("/students/:classCode", async (req, res) => {
  try {
    const classCode = req.params.classCode;
    const foundClass = await Class.findOne({ classCode });
    if (!foundClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    const students = await Student.find({ name: { $in: foundClass.students } });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get all classes
app.get("/get-classes", async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const announcementSchema = new mongoose.Schema({
  announcementText: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create model for Announcements
const Announcement = mongoose.model("Announcement", announcementSchema);

// Endpoint to create a new announcement
app.post("/announce", async (req, res) => {
  try {
    const { announcementText } = req.body;
    const newAnnouncement = new Announcement({
      announcementText,
    });
    const savedAnnouncement = await newAnnouncement.save();
    res.status(201).json(savedAnnouncement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/announce/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
    if (!deletedAnnouncement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get all announcements
app.get("/announcements", async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ timestamp: -1 });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log("App running on port", PORT);
});
