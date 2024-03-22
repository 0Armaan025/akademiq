import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../index.css";
import MiddlePart from "./components/middle/MiddlePart";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <MiddlePart />
      <Footer />
    </div>
  );
};

export default HomePage;
