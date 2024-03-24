import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";
import "./studentclassdetailspage.css";
import axios from "axios";
import Cookies from "js-cookie";

const StudentClassDetailsPage = () => {
  const [className, setClassName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    // Fetch class details and announcements
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  const fetchData = async () => {
    try {
      // Retrieve class name and class code from cookie
      const cookieClassName = localStorage.getItem("className");
      const cookieClassCode = localStorage.getItem("classCode");

      // Set class name and class code from cookie
      setClassName(cookieClassName);
      setClassCode(cookieClassCode);

      // Fetch announcements
      const announcementsResponse = await axios.get(
        "http://localhost:5000/announcements"
      );
      setAnnouncements(announcementsResponse.data);

      // Set current timestamp
      setTimestamp(new Date().toLocaleString());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="studentOperationsPage flex flex-row bg-[#faeee7]">
        <LeftSideBar />
        <div className="rightSide flex flex-col pl-64 p-4 bg-[#faeee7] ml-64">
          <div className="mb-8">
            <h1
              className="text-3xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              {className}
            </h1>
            <p className="text-lg text-gray-600">Class Code: {classCode}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 w-full">
            {/* Announcements */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
              <div className="p-6 w-full">
                <h2
                  className="text-3xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "lato" }}
                >
                  Announcements
                </h2>
                {/* Render announcements dynamically */}
                {announcements.map((announcement, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className="bg-white rounded-lg shadow-md p-4 w-full mr-4"
                      style={{ background: "none" }}
                    >
                      <p
                        className="text-sm font-semibold text-gray-800 mb-2 w-[30rem]"
                        style={{ background: "none", fontFamily: "Poppins" }}
                      >
                        {announcement.announcementText}
                      </p>
                    </div>
                    {index !== announcements.length - 1 && (
                      <hr className="my-4" />
                    )}
                  </div>
                ))}
                {/* Timestamp */}
                <p className="text-sm text-gray-500">Timestamp: {timestamp}</p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default StudentClassDetailsPage;
