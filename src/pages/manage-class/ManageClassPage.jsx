import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import TeacherLeftSideBar from "../../components/teacher-left-side-bar/TeacherLeftSideBar";

const ManageClassPage = () => {
  const [announcements, setAnnouncements] = useState([]); // State to manage all announcements
  const [announcement, setAnnouncement] = useState(""); // State to manage the announcement added by the teacher

  const handleAnnouncementChange = (event) => {
    setAnnouncement(event.target.value);
  };

  const handleKeyDown = (event) => {
    // Check if the user presses Shift + Enter
    if (event.key === "Enter" && event.shiftKey) {
      // Add a new line character to the announcement text
      setAnnouncement(announcement + "\n");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the announcement is empty
    if (announcement.trim() !== "") {
      // Add the new announcement to the list
      setAnnouncements([
        ...announcements,
        { text: announcement.trim(), timestamp: new Date().toLocaleString() },
      ]);
      // Clear the input field after submitting
      setAnnouncement("");
    }
  };

  const handleDeleteAnnouncement = (index) => {
    const updatedAnnouncements = [...announcements];
    updatedAnnouncements.splice(index, 1);
    setAnnouncements(updatedAnnouncements);
  };

  return (
    <>
      <Navbar />
      <TeacherLeftSideBar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Manage Class</h2>
        <div className="p-4 ml-48 absolute bottom-0 w-[65rem]">
          {/* Render all announcements */}
          <div className="mb-4 max-h-[20rem] overflow-y-auto">
            {announcements.map((item, index) => (
              <div key={index} className="mb-2 flex justify-between">
                <div className="font-bold flex flex-row">
                  You: <h3 className="font-semibold ml-1">{item.text}</h3>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">{item.timestamp}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={() => handleDeleteAnnouncement(index)}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          {/* Input form for adding new announcement */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center">
              <textarea
                className="w-full border px-4 py-4 mr-2 focus:outline-none border-gray-700 p-8 rounded-lg "
                placeholder="Type your announcement..."
                value={announcement}
                onChange={handleAnnouncementChange}
                onKeyDown={handleKeyDown}
                rows={4} // Set number of rows to allow multiline input
              />
              <button
                type="submit"
                className="bg-[#818181] text-white px-8 py-3 rounded h-[3.8rem] text-xl focus:outline-none"
                style={{ fontFamily: "Poppins", minWidth: "120px" }} // Adjust button width
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageClassPage;
