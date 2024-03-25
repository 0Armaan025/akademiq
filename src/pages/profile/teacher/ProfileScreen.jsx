import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import TeacherLeftSideBar from "../../../components/teacher-left-side-bar/TeacherLeftSideBar";
import LeftSideBar from "../../../components/leftsidebar/LeftSideBar";

const TeacherProfileScreen = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Armaan",
    email: "armaan22000@gmail.com",
    school: "SHCS",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated Data:", formData);
    setEditing(false);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-screen flex flex-row">
        <TeacherLeftSideBar />
        <div className="right-side ml-64 p-6">
          <h2 className="text-4xl font-semibold mb-4">
            Good evening, {formData.name} 👋
          </h2>
          <br></br>
          {isAuthenticated && (
            <div className="profile-info bg-white shadow-md rounded-lg p-3">
              <div
                className="grid grid-cols-4 md:grid-cols-2 gap-4"
                style={{ background: "none" }}
              >
                <div style={{ background: "none" }}>
                  <label
                    className="text-gray-600"
                    style={{ background: "none" }}
                  >
                    Name:{" "}
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input1"
                    />
                  ) : (
                    <span
                      className="text-gray-800 ml-2"
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
                    Email:{" "}
                  </label>
                  {editing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  ) : (
                    <span
                      className="text-gray-800 ml-2"
                      style={{ background: "none" }}
                    >
                      {formData.email}
                    </span>
                  )}
                </div>
                <div style={{ background: "none" }}>
                  <label
                    className="text-gray-600"
                    style={{ background: "none" }}
                  >
                    School:{" "}
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  ) : (
                    <span
                      className="text-gray-800  ml-2"
                      style={{ background: "none" }}
                    >
                      {formData.school}
                    </span>
                  )}
                </div>
              </div>
              <br></br>

              {editing ? (
                <button onClick={handleSave} className="btn-save">
                  Save
                </button>
              ) : (
                <button onClick={() => setEditing(true)} className="btn-edit">
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

export default TeacherProfileScreen;
