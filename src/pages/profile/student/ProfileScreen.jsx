import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";

const ProfileScreen = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Armaan",
    fatherName: "",
    motherName: "",
    email: "armaan33000@gmail.com",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Perform save action here, e.g., update user data
    // For demonstration, logging the updated data
    console.log("Updated Data:", formData);
    setEditing(false); // Exit editing mode after saving
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="profileScreen flex flex-row ">
        <LeftSideBar />
        <div className="rightSide ml-64 p-6" style={{ background: "none" }}>
          <h2 className="text-4xl font-semibold mb-4">
            Good evening, Armaan 👋
          </h2>
          {!isAuthenticated && (
            <div className="profileInfo bg-white shadow-md rounded-lg p-6">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                style={{ background: "none" }}
              >
                <div style={{ background: "none" }}>
                  <label
                    className="text-gray-600"
                    style={{ background: "none" }}
                  >
                    Name:
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      style={{ background: "none" }}
                      onChange={handleInputChange}
                      className="form-input rounded border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 transition-colors duration-300"
                    />
                  ) : (
                    <span
                      className="text-gray-800"
                      style={{ background: "none" }}
                    >
                      {formData.name}
                    </span>
                  )}
                </div>
                <div style={{ background: "none" }}>
                  <label
                    className="text-gray-600"
                    style={{ background: "none" }}
                  >
                    Father's Name:
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      name="fatherName"
                      style={{ background: "none" }}
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      className="form-input rounded border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 transition-colors duration-300"
                    />
                  ) : (
                    <span
                      className="text-gray-800"
                      style={{ background: "none" }}
                    >
                      {formData.fatherName}
                    </span>
                  )}
                </div>
                <div style={{ background: "none" }}>
                  <label
                    className="text-gray-600"
                    style={{ background: "none" }}
                  >
                    Mother's Name:
                  </label>
                  {editing ? (
                    <input
                      style={{ background: "none" }}
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="form-input rounded border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 transition-colors duration-300"
                    />
                  ) : (
                    <span
                      className="text-gray-800"
                      style={{ background: "none" }}
                    >
                      {formData.motherName}
                    </span>
                  )}
                </div>
                <div style={{ background: "none" }}>
                  <label
                    className="text-gray-600"
                    style={{ background: "none" }}
                  >
                    Email:
                  </label>
                  {editing ? (
                    <input
                      type="email"
                      name="email"
                      style={{ background: "none" }}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input rounded border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 transition-colors duration-300"
                    />
                  ) : (
                    <span
                      className="text-gray-800"
                      style={{ background: "none" }}
                    >
                      {formData.email}
                    </span>
                  )}
                </div>
              </div>
              {editing ? (
                <button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded transition-all duration-300"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setEditing(true)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded transition-all duration-300"
                >
                  Edit
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
