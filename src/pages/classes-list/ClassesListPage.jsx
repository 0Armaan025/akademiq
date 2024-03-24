import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import TeacherLeftSideBar from "../../components/teacher-left-side-bar/TeacherLeftSideBar";
import axios from "axios";

const ClassesListPage = () => {
  // State to hold the classes data
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes data from the server
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-classes");
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <>
      <Navbar />
      <TeacherLeftSideBar />
      <br />
      <center>
        <h2 className="text-4xl font-bold" style={{ fontFamily: "Poppins" }}>
          Classes List
        </h2>
      </center>
      <br />
      <div className="flex flex-col items-center gap-4 ml-56 mr-8">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md w-full transition-all hover:scale-105 hover:cursor-pointer"
          >
            {/* Class name */}
            <span
              className="text-xl font-semibold"
              style={{ background: "none" }}
            >
              {classItem.className}
            </span>

            {/* Class code */}
            <span
              className="text-xl font-semibold"
              style={{ background: "none" }}
            >
              {classItem.classCode}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassesListPage;
