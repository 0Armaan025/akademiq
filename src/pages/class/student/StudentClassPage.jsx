import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import "./studentclasspage.css";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";

const StudentClassPage = () => {
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
              You have no class joined!
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
              />
              <button className="bg-[#818181] text-[#fff7f7] text-xl font-bold p-2 px-2 w-[100px] h-11 rounded-sm">
                Join!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentClassPage;
