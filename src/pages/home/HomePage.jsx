import React from "react";
import Navbar from "../../components/navbar/Navbar";
import MiddlePart from "./components/middle/MiddlePart";
import Footer from "../../components/footer/Footer";


const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <MiddlePart />
      <Footer />
    </div>
  );
};

export default HomePage;