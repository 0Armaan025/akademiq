import React from "react";
import "./cards.css"; 
const Card = ({ name, role, description, email }) => {
  return (
    <div className="card">
      <div className="card-image">
        {/* Assuming you have an image for each team member */}
        <img src={`https://imgs.search.brave.com/jYJenORZ1vlj73g6bbNTraWjAF0iMRCR9mtFLuRWJF8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyYWNrcy1v/bi1hLWZyb3plbi1z/ZWEuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA`} alt={name} />
      </div>
      <div className="card-content" style={{background: "none"}}>
        <h2 style={{background: "none"}}>{name}</h2>
        <p className="role" style={{background: "none", color: "white"}}>{role}</p>
        <p style={{background: "none", color: "white"}}>{description}</p>
        <p className="email" style={{background: "none", color: "white"}}>{email}</p>
        {/* You can add additional elements or styling as needed */}
      </div>
    </div>
  );
};

export default Card;
