import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import TeacherLeftSideBar from "../../components/teacher-left-side-bar/TeacherLeftSideBar";

const StudentsListPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // Function to generate a random image URL from Lorem Picsum API
  const generateRandomImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000); // Generate random image ID
    return `https://picsum.photos/200/200?random=${randomImageId}`;
  };

  return (
    <>
      <Navbar />
      <TeacherLeftSideBar />
      <br />
      <center>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>
          Class: Some Random Class Name's Students
        </h2>
      </center>
      <br />
      <div className="flex flex-col items-center gap-4 ml-64 mr-16">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 p-4 rounded-md shadow-md w-full"
          >
            {/* Profile picture */}
            <img
              src={generateRandomImage()}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />

            {/* Student name */}
            <span
              className="flex-grow text-xl font-semibold"
              style={{ background: "none", fontFamily: "Poppins" }}
            >
              {student.name}{" "}
              {/* Assuming student object has a 'name' property */}
            </span>

            {/* Arrow button */}
            <button className="bg-[#818181] text-[#fff7f7] font-bold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentsListPage;
