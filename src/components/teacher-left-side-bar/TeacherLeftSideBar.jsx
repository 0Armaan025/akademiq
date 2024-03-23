import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./teacherleftsidebar.css";

const TeacherLeftSideBar = () => {
  const { logout } = useAuth0(); // Access the logout function from Auth0

  return (
    <div className="leftSideBarWrapper">
      <div className="leftSideBar bg-[#5b5b5b] rounded-r-md">
        <div className="item">
          <h3 className="itemHeader">Profile</h3>
        </div>
        <div className="item">
          <h3 className="itemHeader">Operations</h3>
        </div>
        <div className="item">
          <h3 className="itemHeader">Students</h3>
        </div>
        <div className="item">
          <h3 className="itemHeader">Classes</h3>
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
