import React from "react";
import HomePage from "./pages/home/HomePage";
import ProfileSetupPage from "./pages/profile-set-up/student/ProfileSetupPage";
import ProfileSetUpPage from "./pages/profile-set-up/teacher/ProfileSetUpPage";
import ProfileScreen from "./pages/profile/student/ProfileScreen";
import StudentOperationsPage from "./pages/operations/student/StudentOperationsPage";
import TeacherOperationsPage from "./pages/operations/teacher/TeacherOperationsPage";

export default function App() {
  return (
    <>
      <TeacherOperationsPage />
    </>
  );
}
