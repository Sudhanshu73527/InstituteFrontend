import React from "react";
import {
  FaBook,
  FaClipboardList,
  FaUserAlt,
  FaSignOutAlt,
  FaFileAlt,
  FaTicketAlt,
  FaChartLine,
} from "react-icons/fa";
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
          <NavItem to="/student" label="Dashboard" icon={<MdDashboard size={20} />} onClick={toggleSidebar} />
        </NavSection>

        {/* ACADEMIC */}
        <NavSection title="Academics">
          <NavItem to="/student/courses" label="Courses" icon={<FaBook size={20} />} onClick={toggleSidebar} />
          <NavItem to="/student/notice" label="NoticeBoard" icon={<FaClipboardList size={20} />} onClick={toggleSidebar} />
        </NavSection>

        {/* PERSONAL */}
        <NavSection title="Personal">
          <NavItem to="/student/profile" label="Profile" icon={<FaUserAlt size={20} />} onClick={toggleSidebar} />
          <NavItem to="/student/issue" label="Raise-Ticket" icon={<FaTicketAlt size={20} />} onClick={toggleSidebar} />
        </NavSection>

        {/* DOCUMENTS */}
        <NavSection title="Documents">
          <NavItem to="/student/documents/admit-card" label="Admit Card" icon={<FaFileAlt size={20} />} onClick={toggleSidebar} />
          <NavItem to="/student/documents/Result" label="Result" icon={<FaChartLine size={20} />} onClick={toggleSidebar} />
        </NavSection>

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
      `mb-2 px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ${
        isActive ? "bg-green-200 text-green-800" : "hover:bg-green-100 text-gray-800"
      }`
    }
  >
    {icon} {label}
  </NavLink>
);

export default Sidebar;
