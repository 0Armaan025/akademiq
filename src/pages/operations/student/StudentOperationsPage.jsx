import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";

const StudentOperationsPage = () => {
  return (
    <>
      <Navbar />
      <div className="studentOperationsPage flex flex-row">
        <LeftSideBar />
        <div className="rightSide flex flex-col pl-64">
          <div className="row flex flex-row justify-center items-center">
            <div className="component px-6 py-4 ">
              {/* dw, same here */}
              <h2> AI FLASH CARDS</h2>
              {/* thank you so much! */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentOperationsPage;
