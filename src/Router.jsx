import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import StudentLayout from "./student/studentLayout";
import Home from "./pages/Home";
import PopularProgram from "./pages/Programs/PopularProgram";
import StudentDashboard from "./student/components/dashboard/studentDashboard";
import Profile from './student/pages/profile/profile';
import AdminLayout from './admin/adminLayout';
import AdminDashboard from './admin/components/dashboard/adminDashboard';
import StudentRegistrationForm from './admin/pages/StudentReg/StudentRegistrationForm';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import ChangePassword from './auth/ChangePassword';
import ProtectedRoute from "../src/admin/components/secureRoute/ProtectedRoute"; // import here
import CreateCourseForm from './admin/pages/Course/CreateCourseForm';
import CourseList from './admin/pages/Course/CourseList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "programs/popular", element: <PopularProgram /> },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <Forgot /> },
      { path: "change-password", element: <ChangePassword /> },
    ],
  },

  // ✅ Protected Student Routes
  {
    path: "/student",
    element: <ProtectedRoute role="student" />, // Protect entire student section
    children: [
      {
        element: <StudentLayout />,
        children: [
          { index: true, element: <StudentDashboard /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },

  // ✅ Protected Admin Routes
  {
    path: "/admin",
    element: <ProtectedRoute role="admin" />, // Protect entire admin section
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "profile", element: <Profile /> },
          {path: "Course-List", element: <CourseList/> },
          { path: "Add-Course", element: <CreateCourseForm /> },
          { path: "register", element: <StudentRegistrationForm /> },
        ],
      },
    ],
  },
]);

export default router;
