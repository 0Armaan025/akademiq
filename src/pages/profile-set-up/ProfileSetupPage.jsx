import React from "react";
import "./profilesetuppage.css";
import Navbar from "../../components/navbar/Navbar";

const ProfileSetupPage = () => {
  return (
    <>
      <Navbar />
      <div className="profileSetupPage flex flex-col justify-center items-center">
        <center>
          <h3
            className="mt-8 text-4xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            Let's Setup your Profile! 🥳
          </h3>
          <br />
          <br />
          <div className="detailsField flex flex-col justify-start items-start bg-[#dadada] p-8 rounded-lg ">
            <label
              className="text-xl"
              style={{
                fontFamily: "lato",
                background: "none",
                fontFamily: "Poppins",
              }}
            >
              Enter your username
            </label>

            <input
              type="text"
              className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
            />
            <br />
            <label
              className="text-xl"
              style={{
                fontFamily: "lato",
                background: "none",
                fontFamily: "Poppins",
              }}
            >
              Enter your Mother's name
            </label>

            <input
              type="text"
              className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
            />
            <br />
            <label
              className="text-xl"
              style={{
                fontFamily: "lato",
                background: "none",
                fontFamily: "Poppins",
              }}
            >
              Enter your Father's name
            </label>

            <input
              type="text"
              className="p-2 px-2 w-[380px] mt-2 border-2 border-black rounded-lg"
            />
            <br />
            <div
              className="buttonDiv w-full flex flex-row justify-center items-center bg-none"
              style={{ background: "none" }}
            >
              <center>
                <button
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

export default ProfileSetupPage;
