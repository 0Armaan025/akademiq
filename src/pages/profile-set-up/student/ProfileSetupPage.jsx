import React, { useState } from "react";
import "./profilesetuppage.css";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const ProfileSetupPage = () => {
  const [formData, setFormData] = useState({
    email: "armaan33000@gmail.com", // Initial email value
    name: "",
    fatherName: "",
    motherName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/create-student-user", formData);
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
            className="mt-8 text-4xl font-bold text-[#33272a]"
            style={{ fontFamily: "Poppins" }}
          >
            Let's Setup your Profile! 🥳
          </h3>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div className="detailsField flex flex-col justify-start items-start bg-[#dadada] p-8 rounded-lg ">
              <br />
              <label
                className="text-xl text-[#33272a]"
                style={{ fontFamily: "lato", background: "none" }}
              >
                Enter your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
              />
              <br />
              <label
                className="text-xl text-[#33272a]"
                style={{ fontFamily: "lato", background: "none" }}
              >
                Enter your father's name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
              />
              <br />
              <label
                className="text-xl text-[#33272a]"
                style={{ fontFamily: "lato", background: "none" }}
              >
                Enter your mother's name
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
              />
              <br />
              <button
                type="submit"
                className="setupProfileBtn py-4 px-16 text-xl font-semibold rounded-sm bg-[#818181] text-[#fff7f7] hover:scale-105 transition-transform"
                style={{ fontFamily: "Poppins" }}
              >
                Set up!
              </button>
            </div>
          </form>
          <br />
        </center>
      </div>
    </>
  );
};

export default ProfileSetupPage;
