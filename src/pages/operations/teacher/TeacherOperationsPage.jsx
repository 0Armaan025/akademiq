import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import "./teacheroperationspage.css";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";

const TeacherOperationsPage = () => {
  return (
    <>
      <Navbar />
      <div className="studentOperationsPage flex flex-row">
        <LeftSideBar />
        <div className="rightSide flex flex-col pl-64">
          <h4
            className="text-3xl mr-16 underline"
            style={{ fontFamily: "Poppins" }}
          >
            {" "}
            Operations{" "}
          </h4>
          <div className="row flex flex-row justify-center items-center">
            <div className="component mt-8 px-8 py-8  transition-all hover:cursor-pointer hover:border-black border-1 bg-[#828282] text-center items-center justify-center flex flex-col rounded-lg hover:bg-[#605f5f]">
              <h4
                className="text-2xl text-white font-semibold"
                style={{ background: "none" }}
              >
                AI FLASHCARDS
              </h4>
            </div>
            <div className="component ml-6 mt-8 px-8 py-8  transition-all hover:cursor-pointer hover:border-black border-1 bg-[#828282] text-center items-center justify-center flex flex-col rounded-lg hover:bg-[#605f5f]">
              <h4
                className="text-2xl text-white font-semibold"
                style={{ background: "none" }}
              >
                AI NOTES/SUMMARIES
              </h4>
            </div>
          </div>
          <div className="row flex flex-row justify-start items-start">
            <div className="component mt-8 px-8 py-8  transition-all hover:cursor-pointer hover:border-black border-1 bg-[#828282] text-center items-center justify-center flex flex-col rounded-lg hover:bg-[#605f5f]">
              <h4
                className="text-2xl text-white font-semibold"
                style={{ background: "none" }}
              >
                AI MENTOR
              </h4>
            </div>
            <div className="component ml-6 mt-8 px-8 py-8  transition-all hover:cursor-pointer hover:border-black border-1 bg-[#828282] text-center items-center justify-center flex flex-col rounded-lg hover:bg-[#605f5f]">
              <h4
                className="text-2xl text-white font-semibold"
                style={{ background: "none" }}
              >
                AI QUIZZES
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherOperationsPage;
