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
import ClassesListPage from "./pages/classes-list/ClassesListPage";
import ManageClassPage from "./pages/manage-class/ManageClassPage";
import AboutUsPage from "./pages/about/AboutUsPage";
import { Route, Routes } from "react-router-dom";
import FlashCardPage from "./pages/flashcard_page/FlashCardPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/student-profile-setup" element={<ProfileSetupPage />} />
        <Route path="/teacher-profile-setup" element={<ProfileSetUpPage />} />
        <Route path="/student-profile" element={<ProfileScreen />} />
        <Route path="/teacher-profile" element={<TeacherProfileScreen />} />
        <Route path="/student-operations" element={<StudentOperationsPage />} />
        <Route path="/teacher-operations" element={<TeacherOperationsPage />} />
        <Route path="/saves" element={<SavesPage />} />
        <Route path="/join-class" element={<StudentClassPage />} />
        <Route path="/student-class" element={<StudentClassDetailsPage />} />
        <Route path="/create-class" element={<TeacherClassCreationPage />} />
        <Route path="/students" element={<StudentsListPage />} />
        <Route path="/classes" element={<ClassesListPage />} />
        <Route path="/manage-class" element={<ManageClassPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/flash-cards" element={<FlashCardPage />} />
      </Routes>
    </>
  );
}
