import React, { useEffect, useState } from "react";
import axios from "axios";
import "./studentslist.css";
import Navbar from "../../components/navbar/Navbar";

const StudentsListPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch random animal images
    const fetchRandomAnimalImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=10&query=animal"
        ); // Fetching 10 random images
        const animalImages = response.data.map((photo) => ({
          profilePicture: photo.download_url, // Using image URLs from Lorem Picsum
        }));
        setStudents(animalImages);
      } catch (error) {
        console.error("Error fetching animal images:", error);
      }
    };

    fetchRandomAnimalImages();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <center>
        <h2 className="text-2xl font-bold " style={{ fontFamily: "Poppins" }}>
          Class: some random class name's students
        </h2>
      </center>
      <br />
      <div className="flex flex-col items-center gap-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 p-4 rounded-md shadow-md w-full"
          >
            {/* Profile picture */}
            <img
              src={student.profilePicture}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />

            {/* Student name */}
            <span
              className="flex-grow text-xl font-semibold"
              style={{ background: "none", fontFamily: "Poppins" }}
            >{`Student ${index + 1}`}</span>

            {/* Arrow button */}
            <button className="bg-[#818181] text-[#fff7f7] font-bold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentsListPage;
