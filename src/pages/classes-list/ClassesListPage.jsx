import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TeacherLeftSideBar from "../../components/teacher-left-side-bar/TeacherLeftSideBar";

const ClassesListPage = () => {
  // Dummy classes data
  const dummyClasses = [
    { name: "Mathematics", code: "MATH101" },
    { name: "Physics", code: "PHYS102" },
    { name: "Biology", code: "BIO103" },
    { name: "History", code: "HIST104" },
    { name: "Computer Science", code: "CS105" },
  ];

  return (
    <>
      <Navbar />
      <TeacherLeftSideBar /> {/* Include the TeacherLeftSideBar component */}
      <br />
      <center>
        <h2 className="text-4xl font-bold" style={{ fontFamily: "Poppins" }}>
          Classes List
        </h2>
      </center>
      <br />
      <div className="flex flex-col items-center gap-4 ml-56 mr-8">
        {dummyClasses.map((classItem, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md w-full transition-all hover:scale-105 hover:cursor-pointer"
          >
            {/* Class name */}
            <span
              className="text-xl font-semibold"
              style={{ background: "none" }}
            >
              {classItem.name}
            </span>

            {/* Class code */}
            <span
              className="text-xl font-semibold"
              style={{ background: "none" }}
            >
              {classItem.code}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassesListPage;
