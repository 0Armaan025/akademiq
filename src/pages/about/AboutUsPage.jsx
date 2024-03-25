import React from "react";
import "./aboutuspage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Card from "./cards"; // Assuming you have a Card component defined

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
          Our project for the Synapse hackathon aims to revolutionize the
          interaction between teachers and students through a user-friendly
          website. By leveraging innovative technologies, we have created a
          platform designed to streamline the workflow for both educators and
          learners. The website offers teachers seamless access to comprehensive
          student data, empowering them to make informed decisions tailored to
          individual needs. Additionally, teachers can effortlessly share
          educational materials, such as notes and resources, fostering an
          enriched learning environment. Through our project, we aspire to
          bridge the gap between instructors and students, promoting
          collaboration and enhancing the educational experience for all parties
          involved.
        </p>

        <div className="card-container" style={{ background: "none" }}>
          <Card
            style={{ background: "none" }}
            name="Anik"
            role="Web Designer"
            description="A web designer crafts visually compelling and user-friendly websites by blending aesthetics, usability, and technical elements."
            email="anik@example.com"
          />
          <Card
            style={{ background: "none" }}
            name="Armaan"
            role="Full-Stack Developer"
            description="A Full-Stack Developer who loves creating fun stuff! :D"
            email="armaan33000@gmail.com"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
