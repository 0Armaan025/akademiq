import React from "react";
import "./aboutuspage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <h1
          className="about-us-title text-xl font-bold mb-6 text-white"
          style={{ fontFamily: "Poppins" }}
        >
          About Us
        </h1>
        <div className="animated-circles mt-16">
          <div className="animated-circle bg-[#a8a8a8]"></div>
          <div className="animated-circle bg-[#e6c6c6]"></div>
          <div className="animated-circle bg-[#ffb8b8]"></div>
        </div>
        <p
          className="about-us-description text-white mt-16"
          style={{ fontFamily: "Poppins" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida
          urna ac justo malesuada, vel tristique elit fringilla. Phasellus eget
          metus eu nulla facilisis gravida. Mauris eu vestibulum quam.
        </p>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default AboutUsPage;
