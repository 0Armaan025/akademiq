import React from "react";
import HomePage from "./pages/home/HomePage";
import ProfileSetupPage from "./pages/profile-set-up/student/ProfileSetupPage";
import ProfileSetUpPage from "./pages/profile-set-up/teacher/ProfileSetUpPage";
import ProfileScreen from "./pages/profile/student/ProfileScreen";
import StudentOperationsPage from "./pages/operations/student/StudentOperationsPage";
import TeacherOperationsPage from "./pages/operations/teacher/TeacherOperationsPage";
import SavesPage from "./pages/saves/SavesPage";
import StudentClassPage from "./pages/class/student/StudentClassPage";
import StudentClassDetailsPage from "./pages/class/student/studentClassDetailsPage";
import TeacherClassCreationPage from "./pages/class/teacher/TeacherClassCreationPage";
import TeacherProfileScreen from "./pages/profile/teacher/ProfileScreen";
import StudentsListPage from "./pages/students-list/StudentsList";
import LeftSideBar from "./components/leftsidebar/LeftSideBar";

export default function App() {
  return (
    <>
      <TeacherProfileScreen />
    </>
  );
}
