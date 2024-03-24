import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./teacherleftsidebar.css";
import { Link } from "react-router-dom";

const TeacherLeftSideBar = () => {
  const { logout } = useAuth0(); // Access the logout function from Auth0

  return (
    <div className="leftSideBarWrapper">
      <div className="leftSideBar bg-[#5b5b5b] rounded-r-md">
        <div className="item">
          <h3 className="itemHeader" style={{ background: "none" }}>
            <Link to="/teacher-profile" style={{ background: "none" }}>
              Profile
            </Link>
          </h3>
        </div>
        <div className="item">
          <h3 className="itemHeader" style={{ background: "none" }}>
            <Link to="/teacher-operations" style={{ background: "none" }}>
              Operations
            </Link>
          </h3>
        </div>
        <div className="item">
          <h3 className="itemHeader" style={{ background: "none" }}>
            <Link to="/students" style={{ background: "none" }}>
              Students
            </Link>
          </h3>
        </div>
        <div className="item">
          <h3 className="itemHeader" style={{ background: "none" }}>
            <Link to="/classes" style={{ background: "none" }}>
              Classes
            </Link>
          </h3>
        </div>
        <div
          className="item"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <h3 className="itemHeader">Log Out</h3>
        </div>
      </div>
    </div>
  );
};

export default TeacherLeftSideBar;
