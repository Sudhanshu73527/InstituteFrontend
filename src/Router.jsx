import React from 'react'; // Ensure this import is present at the top of your JSX files

import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout"; // Assuming Layout is the main layout component
import StudentLayout from "./student/studentLayout"; // Import the student layout
import Home from "./pages/Home"; // Home Page
import PopularProgram from "./pages/Programs/PopularProgram"; // Popular Programs Page
import StudentDashboard from "./student/components/dashboard/studentDashboard"; // Student Dashboard
import Profile from './student/pages/profile/profile';
import AdminLayout from './admin/adminLayout';
import AdminDashboard from './admin/components/dashboard/adminDashboard';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import ChangePassword from './auth/ChangePassword';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main layout for general pages (non-student specific)
    children: [
      {
        index: true,
        element: <Home />, // Default page (Home)
      },
      {
        path: "programs/popular",
        element: <PopularProgram />, // Popular programs page
      },
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path : "/forgot-password",
        element :<Forgot />,
      },
      {
        path: "/change-password",
        element: <ChangePassword/>, // Assuming Forgot component handles password change as well
      }
    ],
  },
  {
    path: "/student",
    element: <StudentLayout />, // Layout for the student section
    children: [
      {
        index: true,
        element: <StudentDashboard />, // Dashboard for student
      },
      {
        path: "documents/hall-ticket",
        // element: < H
      },
      {
        path: "/student/profile",
        element: < Profile />,
      }
      
      // {
      //   path: "assignments",
      //   element: <div>Assignments Page</div>, // Replace with your Assignments page
      // },
      // {
      //   path: "grades",
      //   element: <div>Grades Page</div>, // Replace with your Grades page
      // },
      // {
      //   path: "schedule",
      //   element: <div>Schedule Page</div>, // Replace with your Schedule page
      // },
      // {
      //   path: "settings",
      //   element: <div>Settings Page</div>, // Replace with your Settings page
      // },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Layout for the student section
    children: [
      {
        index: true,
        element: <AdminDashboard/>, // Dashboard for student
      },
      {
        path: "documents/hall-ticket",
        // element: < H
      },
      {
        path: "/admin/profile",
        element: < Profile />,
      }
      
  
    ],
  },
]);

export default router;
