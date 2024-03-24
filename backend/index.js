const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;
const MongooseConnect =
  "mongodb+srv://armaan:Armaan25@cluster0.dfeplrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
});

// Create models based on the schemas
const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);
// Endpoint to create a student user
app.post("/create-student-user", async (req, res) => {
  try {
    const { email, name, motherName, fatherName } = req.body;
    const newUser = new User({
      email,
      name,
      motherName,
      fatherName,
      role: "student", // Set role as student
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
    const { email, name, schoolName, code } = req.body;
    const newUser = new User({
      email,
      name,
      schoolName,
      code,
      role: "teacher", // Set role as teacher
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
    const student = await User.findOne({ name, role: "student" });
    if (!student) {
      return res.status(404).jsoan({ message: "Student not found" });
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
    const teacher = await User.findOne({ name, role: "teacher" });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log("App running on port", PORT);
});
