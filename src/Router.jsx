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
// import AllStudent from './admin/pages/StudentReg/AllStudent'; // ✅ Import AllStudent
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import ChangePassword from './auth/ChangePassword';
import ProtectedRoute from "../src/admin/components/secureRoute/ProtectedRoute";
import CreateCourseForm from './admin/pages/Course/CreateCourseForm';
import CourseList from './admin/pages/Course/CourseList';
import AllStudent from './admin/pages/StudentReg/AllStudent';
import AdmitCard from './admin/pages/AdmitCard/AdmitCard';
import StudentProfile from './admin/pages/StudentReg/StudentProfile';
import EditStudentProfile from './admin/pages/StudentReg/EditStudentProfile'; // ✅ Import EditStudentProfile
import SubjectManagement from './admin/pages/Subject/SubjectManagement';
import ExamManagement from './admin/pages/Exam/ExamSubjectManager';
import ExamSubjectManager from './admin/pages/Exam/ExamSubjectManager';
import AdmitCardGenerator from './admin/pages/AdmitCard/AdmitCardGenerator';
import MarksheetDashboard from './admin/pages/Result/MarksheetDashboard';
import Visionmission from './pages/Programs/Visionmission';
import Aboutcihs from './pages/Programs/Aboutcihs';
import Infrastructure from './pages/Programs/Infrastructure';
import Contact from './pages/Programs/Contact';
import Feedback from './pages/Programs/Feedback';
import Logout from './auth/Logout';
import StudentProfileView from './student/pages/profile/StudentProfileView';
import UnderConstruction from './pages/Programs/UnderConstruction';
import AdmitCardDownload from './student/pages/AdmitCard/AdmitCardDownload';
import ResultCardDownload from './student/pages/ResultCard/ResultCardDownload';
import NoticeBoard from './pages/Programs/NoticeBoard';
import StudentTickets from './student/pages/Ticket/StudentTickets';
import AdminTickets from './admin/pages/Ticket/AdminTickets';
import AboutCourse from './pages/Programs/AboutCourse';
import NewProgram from './pages/Programs/NewProgram';
import AdmissionRequest from './pages/Programs/AdmissionRequest';
import HowToUse from './pages/Programs/HowToUse';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "programs/popular", element: <PopularProgram /> },
      { path: "/programs/vision", element: <Visionmission /> },
      { path: "/About/Program", element: <Aboutcihs /> },
      { path: "/programs/infra", element: <Infrastructure /> },
      { path: "/programs/Contact", element: <Contact /> },
      { path: "/programs/feedback", element: <Feedback /> },
      {path:"/About/Course", element:<AboutCourse/>},
      {path:"/programs/new", element:<NewProgram/>},
      {path:"/programs/old", element:<AdmissionRequest/>},
      {path:"/Instruction/use", element:<HowToUse/>},
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      { path: "forgot-password", element: <Forgot /> },
      { path: "change-password", element: <ChangePassword /> },
    ],
  },

  // ✅ Protected Student Routes
  {
    path: "/student",
    element: <ProtectedRoute role="student" />,
    children: [
      {
        element: <StudentLayout />,
        children: [
          { index: true, element: <StudentDashboard /> },
          { path: "profile", element: <Profile /> },
          {
            path: "students/:studentId/view",
            element: <StudentProfileView />
          },
          {
             path :"/student/documents/admit-card" ,element: <AdmitCardDownload/>

          },
           {
             path :"/student/documents/Result" ,element: <ResultCardDownload/>

          },
          {
            path: "/student/notice",
            element:< NoticeBoard />
          },
          {
            path: "/student/issue",
            element: <StudentTickets />
          }
        ],
      },
    ],
  },

  // ✅ Protected Admin Routes
  {
    path: "/admin",
    element: <ProtectedRoute role="admin" />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "profile", element: <Profile /> },
          {
            path: "students/:studentId/view",
            element: <StudentProfileView />
          },
          { path: "Course-List", element: <CourseList /> },
          { path: "Subject-List", element: <SubjectManagement /> },
          { path: "Add-Course", element: <CreateCourseForm /> },
          { path: "register", element: <StudentRegistrationForm /> },
          { path: "student/all", element: <AllStudent /> }, // ✅ Correct
          { path: "documents/hall-ticket", element: <AdmitCard /> },
          { path: "students/:studentId", element: <StudentProfile /> },
          { path: "students/:studentId/edit", element: <EditStudentProfile /> }, // ✅ Add EditStudentProfile route
          { path: "Exam", element: < ExamSubjectManager /> },
          { path: "Admit-Card", element: <AdmitCardGenerator /> },
          { path: "Result", element: <MarksheetDashboard /> },
          {
            path: "Ticket",
            element: <AdminTickets />
          } // Assuming AdmitCardGenerator handles results
        ],
      },


    ],
  },

  {
  path: "*",
  element: <UnderConstruction />
}

]);

export default router;

