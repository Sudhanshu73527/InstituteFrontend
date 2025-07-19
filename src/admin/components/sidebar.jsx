import React from "react";
import { FaBook, FaClipboardList, FaCalendarAlt, FaUserAlt, FaCog, FaSignOutAlt, FaFileAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar({ className, toggleSidebar }) {
  return (
    <aside className={`${className} backdrop-blur-md text-gray-800 p-4 h-[89vh] mt-[10vh] overflow-y-scroll bg-gradient-to-br from-green-100 via-white to-green-200`}>
      {/* Close on mobile */}
      <div className="relative lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-red-500 hover:bg-red-500 hover:text-white rounded-md p-1"
        >
          ✕
        </button>
      </div>

      {/* MAIN NAV */}
      <div className="px-2">
        <NavSection title="Main">
          <NavItem to="/admin" label="Dashboard" icon={<MdDashboard size={20} />} onClick={toggleSidebar} />
        </NavSection>

        {/* ACADEMIC */}


        {/* PERSONAL */}
        <NavSection title="Personal">
          <NavItem to="/admin/profile" label="Profile" icon={<FaUserAlt size={20} />} onClick={toggleSidebar} />

        </NavSection>

        {/* DOCUMENTS */}
        <NavSection title="Documents">
          <NavItem to="/admin/Course-List" label="Course" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} />
          <NavItem to="/admin/Subject-List" label="Subjects" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} />
          {/* <NavItem to="/admin/register" label="Reg. New Student" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} /> */}
          <NavItem to="/admin/student/all" label="Students" icon={<FaClipboardList size={20} />} onClick={toggleSidebar} />
          <NavItem to="/admin/Exam" label="Exam-Management" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} />


          {/* <NavItem to="/admin/documents/hall-ticket" label="Hall Ticket" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} /> */}
          <NavItem to="/admin/Admit-Card" label="Admit Card" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} />
          <NavItem to="/admin/Result" label="Result" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} />
          {/* <NavItem to="/admin/documents/certificates" label="Certificates" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} /> */}
        </NavSection>

        {/* CERTIFICATE VERIFICATION - New Section for Admin */}
        {/* <NavSection title="Certificate">
          <NavItem to="/admin/certificate-verification" label="Verify Certificates" icon={<FaClipboardList size={20} />} onClick={toggleSidebar} />
        </NavSection> */}

        {/* SETTINGS */}
        {/* <NavSection title="Settings">
          <NavItem to="/admin/settings" label="Settings" icon={<FaCog size={20} />} onClick={toggleSidebar} />
        </NavSection> */}

        {/* LOGOUT */}
        <NavSection title="Logout">
          <NavItem to="/logout" label="Logout" icon={<FaSignOutAlt size={20} />} onClick={toggleSidebar} />
        </NavSection>
      </div>
    </aside>
  );
}

// Helper Components
const NavSection = ({ title, children }) => (
  <div className="mb-4">
    <h2 className="uppercase text-sm text-gray-400 px-2 mb-2">{title}</h2>
    <div className="flex flex-col">{children}</div>
  </div>
);

const NavItem = ({ to, label, icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `mb-2 px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ${isActive ? "bg-green-200 text-green-800" : "hover:bg-green-100 text-gray-800"
      }`
    }
  >
    {icon} {label}
  </NavLink>
);

export default Sidebar;
