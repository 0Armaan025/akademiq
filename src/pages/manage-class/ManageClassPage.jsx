import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import Navbar from "../../components/navbar/Navbar";
import TeacherLeftSideBar from "../../components/teacher-left-side-bar/TeacherLeftSideBar";

const ManageClassPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    // Fetch announcements when the component mounts
    fetchAnnouncements();
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:5000/announcements"); // Make GET request to fetch announcements
      setAnnouncements(response.data); // Update state with fetched announcements
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const handleAnnouncementChange = (event) => {
    setAnnouncement(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      setAnnouncement(announcement + "\n");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (announcement.trim() !== "") {
      try {
        // Make POST request to create a new announcement
        await axios.post("http://localhost:5000/announce", {
          announcementText: announcement.trim(),
        });
        // Refetch announcements after successful submission
        fetchAnnouncements();
        setAnnouncement(""); // Clear input field after submission
      } catch (error) {
        console.error("Error creating announcement:", error);
      }
    }
  };

  const handleDeleteAnnouncement = async (index) => {
    try {
      await axios.delete(
        `http://localhost:5000/announce/${announcements[index]._id}`
      ); // Make DELETE request to delete announcement
      // Update state by filtering out the deleted announcement
      setAnnouncements(announcements.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  return (
    <>
      <Navbar />
      <TeacherLeftSideBar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Manage Class</h2>
        <div className="p-4 ml-48 absolute bottom-0 w-[65rem]">
          <div className="mb-4 max-h-[20rem] overflow-y-auto">
            {announcements.map((item, index) => (
              <div key={index} className="mb-2 flex justify-between">
                <div className="font-bold flex flex-row">
                  You:{" "}
                  <h3 className="font-semibold ml-1">
                    {item.announcementText}
                  </h3>
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
          <form onSubmit={handleSubmit}>
            <div className="flex items-center">
              <textarea
                className="w-full border px-4 py-4 mr-2 focus:outline-none border-gray-700 p-8 rounded-lg "
                placeholder="Type your announcement..."
                value={announcement}
                onChange={handleAnnouncementChange}
                onKeyDown={handleKeyDown}
                rows={4}
              />
              <button
                type="submit"
                className="bg-[#818181] text-white px-8 py-3 rounded h-[3.8rem] text-xl focus:outline-none"
                style={{ fontFamily: "Poppins", minWidth: "120px" }}
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
