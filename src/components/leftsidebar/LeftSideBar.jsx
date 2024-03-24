import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./leftsidebar.css";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const { logout } = useAuth0(); // Access the logout function from Auth0

  return (
    <div className="left-sidebar-wrapper">
      <div className="left-sidebar bg-gray-900 rounded-lg shadow-lg">
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3
            className="item-header text-lg font-semibold text-gray-200"
            style={{ background: "none" }}
          >
            <Link to="/student-profile" style={{ background: "none" }}>
              Profile
            </Link>
          </h3>
        </div>
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3
            className="item-header text-lg font-semibold text-gray-200"
            style={{ background: "none" }}
          >
            <Link to="/student-operations" style={{ background: "none" }}>
              Operations
            </Link>
          </h3>
        </div>
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3
            className="item-header text-lg font-semibold text-gray-200"
            style={{ background: "none" }}
          >
            <Link to="/saves" style={{ background: "none" }}>
              Saves
            </Link>
          </h3>
        </div>
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3
            className="item-header text-lg font-semibold text-gray-200"
            style={{ background: "none" }}
          >
            <Link to="/student-class" style={{ background: "none" }}>
              Class
            </Link>
          </h3>
        </div>
        <div
          className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <h3
            className="item-header text-lg font-semibold text-gray-200"
            style={{ background: "none" }}
          >
            Log Out
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
