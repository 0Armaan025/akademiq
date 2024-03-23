import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";
import "./studentclassdetailspage.css";

const StudentClassDetailsPage = () => {
  // Sample class details
  const className = "Mathematics";
  const classCode = "ABC123";

  // Sample announcements data
  const announcements = [
    {
      title: "Announcement 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Announcement 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Announcement 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Announcement 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Announcement 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more announcements as needed
  ];

  // Get current timestamp
  const timestamp = new Date().toLocaleString();

  return (
    <>
      <Navbar />
      <div className="studentOperationsPage flex flex-row bg-[#faeee7]">
        <LeftSideBar />
        <div className="rightSide flex flex-col pl-64 p-4 bg-[#faeee7]">
          <div className="mb-8">
            <h1
              className="text-3xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              {className}
            </h1>
            <p className="text-lg text-gray-600">Class Code: {classCode}</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Announcements */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {announcement.content}
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
