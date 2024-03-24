import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./leftsidebar.css";

const LeftSideBar = () => {
  const { logout } = useAuth0(); // Access the logout function from Auth0

  return (
    <div className="left-sidebar-wrapper">
      <div className="left-sidebar bg-gray-900 rounded-lg shadow-lg">
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3 className="item-header text-lg font-semibold text-gray-200">Profile</h3>
        </div>
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3 className="item-header text-lg font-semibold text-gray-200">Operations</h3>
        </div>
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3 className="item-header text-lg font-semibold text-gray-200">Saves</h3>
        </div>
        <div className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300">
          <h3 className="item-header text-lg font-semibold text-gray-200">Class</h3>
        </div>
        <div
          className="item py-4 px-6 hover:bg-indigo-700 cursor-pointer transition duration-300"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <h3 className="item-header text-lg font-semibold text-gray-200">Log Out</h3>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
