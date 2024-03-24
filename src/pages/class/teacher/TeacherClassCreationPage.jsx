import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import "./teacherclasscreationpage.css";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";
import axios from "axios";
import TeacherLeftSideBar from "../../../components/teacher-left-side-bar/TeacherLeftSideBar";

const TeacherClassCreationPage = () => {
  // State to hold the class name and class code
  const [className, setClassName] = useState("");
  const [classCode, setClassCode] = useState("");

  // Function to generate a random class code
  const generateClassCode = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    setClassCode(code);
  };

  // Function to handle class creation
  const handleCreateClass = async () => {
    generateClassCode();
    console.log({ className, classCode });
    try {
      // Send a POST request to create a class
      const response = await axios.post(
        "http://localhost:5000/create-class", // Update the URL with your backend endpoint
        { className, classCode }
      );
      console.log("Class created:", response.data);
      // Set the generated class code
      setClassCode(response.data.classCode);
    } catch (error) {
      console.error("Error creating class:", error);
      // Handle errors here
    }
  };

  // Function to handle copying class code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard
      .writeText(classCode)
      .then(() => {
        console.log("Class code copied to clipboard:", classCode);
        // You can add a toast or notification here to indicate successful copying
      })
      .catch((error) => {
        console.error("Error copying class code:", error);
        // You can handle errors here, such as displaying an error message
      });
  };

  return (
    <>
      <Navbar />
      <div className="teacherOperationsPage flex flex-row">
        <TeacherLeftSideBar />
        <div className="rightSide flex flex-col pl-64">
          <div className="flex flex-col items-center mt-8">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Create a New Class
            </h2>
            <br />
            <div className="classInputArea flex flex-col items-start w-full">
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                style={{ fontFamily: "Poppins" }}
                placeholder="Enter the class name"
                className="p-2 px-2 w-[300px] mr-4 border-2 border-black rounded-sm"
              />
              <button
                onClick={handleCreateClass}
                className="bg-[#818181] mt-2 text-[#fff7f7] text-xl font-bold p-2 px-2 w-[100px] h-11 rounded-lg"
              >
                Create!
              </button>
            </div>
            {/* Display class code */}
            {classCode && (
              <div className="mt-4 flex items-center">
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Your class code:
                </h3>
                <p
                  className="text-2xl font-bold bg-gray-100 px-4 py-2 rounded-md mr-4"
                  style={{ fontFamily: "Poppins" }}
                >
                  {classCode}
                </p>
                <button
                  onClick={handleCopyCode}
                  className="bg-[#818181] text-[#fff7f7] text-xl font-bold p-2 px-2 rounded-sm"
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherClassCreationPage;
