import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import "./studentclasspage.css";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";
import axios from "axios";
import Cookies from "js-cookie";

const StudentClassPage = () => {
  const [classCode, setClassCode] = useState("");
  const [className, setClassName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchClass = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/search-classname/${classCode}`
      );
      const { className } = response.data;
      setClassName(className);
      setErrorMessage("");
    } catch (error) {
      setClassName("");
      setErrorMessage("Class not found");
    }
  };

  const handleJoinClass = async () => {
    try {
      const username = "Armaan"; // Assuming the user's name is fixed for demonstration
      await handleSearchClass();
      console.log(className, classCode, username);
      await axios.post("http://localhost:5000/join-class", {
        classCode,
        username, // Fixed typo in variable name
      });
      Cookies.set("className", className);
      Cookies.set("classCode", classCode);
      localStorage.setItem("className", className.toString());
      localStorage.setItem("classCode", classCode.toString());

      console.log("Successfully joined the class!");
    } catch (error) {
      console.error("Error joining the class:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="studentOperationsPage flex flex-row">
        <LeftSideBar />
        <div className="rightSide flex flex-col pl-64">
          <div className="flex flex-col items-center mt-8">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              {className
                ? `Class Name: ${className}`
                : "You have no class joined!"}
            </h2>
            <h3
              className="text-2xl font-medium mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              Please enter a class code to join in!
            </h3>
            <br />
            <div className="classCodeArea flex flex-row justify-start items-start w-full">
              <input
                type="text"
                style={{ fontFamily: "Poppins" }}
                placeholder="Enter the class code"
                className="p-2 px-2 w-[300px] mr-4 border-2 border-black rounded-sm"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
              />
              <button
                className="bg-[#818181] text-[#fff7f7] text-xl p-2 px-2 w-[100px] h-11 rounded-sm"
                onClick={handleJoinClass}
              >
                Join
              </button>
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentClassPage;
