import React from "react";
import "./profilesetuppage.css";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const ProfileSetUpPage = () => {
  const [formData, setFormData] = useState({
    email: "armaan33000@gmail.com", // Initial email value
    name: "",
    schoolName: "",
    code: "0",
    role: "teacher",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    // yes for student
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/create-teacher-user",
        formData
      );
      Cookies.set("authenticated", "true");
      Cookies.set("role", "teacher");
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("role", "teacher");
      console.log(response.data); // Assuming your backend sends back saved user data
      // Redirect or perform any other action upon successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  return (
    <>
      <Navbar />
      <div className="profileSetupPage flex flex-col justify-center items-center">
        <center>
          <h3
            className="mt-8 text-4xl font-bold text-#33272a"
            style={{ fontFamily: "Poppins" }}
          >
            Let's Setup your Profile! 🏫
          </h3>
          <br />
          <br />
          <div className="detailsField flex flex-col justify-start items-start bg-[#dadada] p-8 rounded-lg ">
            <label
              className="text-xl text-[#33272a]"
              style={{
                fontFamily: "lato",
                background: "none",
                fontFamily: "Poppins",
              }}
            >
              Enter your name (teacher)
            </label>

            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
            />
            <br />
            <label
              className="text-xl text-[#33272a]"
              style={{
                fontFamily: "lato",
                background: "none",
                fontFamily: "Poppins",
              }}
            >
              Enter your school name
            </label>

            <input
              name="schoolName"
              onChange={handleChange}
              type="text"
              className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
            />
            <br />
            <label
              className="text-xl text-[#33272a]"
              style={{
                fontFamily: "lato",
                background: "none",
                fontFamily: "Poppins",
              }}
            >
              Enter your teacher's code
            </label>

            <input
              name="code"
              onChange={handleChange}
              type="text"
              className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
            />
            <br />
            <div
              className="teacherSignUpDiv flex flex-row justify-end items-end w-full bg-none"
              style={{ background: "none" }}
            >
              <Link to="/student-profile-setup" style={{ background: "none" }}>
                <h4
                  style={{ background: "none", fontFamily: "Poppins" }}
                  className="text-[#33272a] hover:cursor-pointer"
                >
                  Click here to sign up as a student instead!
                </h4>
              </Link>
            </div>
            <br />
            <div
              className="buttonDiv w-full flex flex-row justify-center items-center bg-none"
              style={{ background: "none" }}
            >
              <center>
                <button
                  onClick={handleSubmit}
                  className="setupProfileBtn py-4 px-16 text-xl font-semibold rounded-sm bg-[#818181] text-[#fff7f7] hover:scale-105 transition-transform"
                  value=""
                  style={{ fontFamily: "Poppins" }}
                >
                  Set up!
                </button>
              </center>
            </div>
          </div>
          <br />
        </center>
      </div>
    </>
  );
};

export default ProfileSetUpPage;
