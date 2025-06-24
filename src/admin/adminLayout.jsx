import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../student/components/header/Header";
import Sidebar from "../student/components/Sidebar";
import Footer from "../student/components/footer/Footer";
import { Box } from "@mui/material";
import RouterCumb from "../student/components/RouterCumb"; // Optional: If you want breadcrumbs
import ProgressBar from "../student/components/progressBar/ProgressBar"; // Optional: If you want a progress bar
import { useWindowContext } from "../context/windowContext"; // Assuming you have a context for window size
import { ToastContainer } from "react-toastify";  // Optional: If you want toast notifications
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(true); // Default to open for larger screens
  const { divRef, progressWidth } = useWindowContext();  // If you want to use progress or other context states

  // Toggle sidebar visibility
  const toggleSidebar = () => setOpenSidebar((prev) => !prev);

  // Handle window resize to toggle sidebar visibility on mobile
  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 1024); // Open sidebar on desktop, close on mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="flex w-full min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">
      <ToastContainer /> {/* Optional: If you want toast notifications */}

      {/* Sidebar */}
      <Sidebar
        openSidebar={openSidebar}
        toggleSidebar={toggleSidebar}
        className={`lg:fixed absolute top-0 left-0 z-30 w-64 h-full bg-white transition-transform duration-300 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      />

      {/* Main Content Area */}
      <Box
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
          openSidebar ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} openSidebar={openSidebar} />

        {/* Breadcrumbs and progress bar (optional) */}
        <Box className="mt-[10vh] px-4">
          <ProgressBar progressWidth={progressWidth} /> {/* Optional: If you want progress bar */}
          <RouterCumb /> {/* Optional: If you want breadcrumbs */}
        </Box>

        {/* Main Scrollable Content */}
        <main
  ref={divRef || null}
  className="flex-grow overflow-y-auto p-4 bg-gradient-to-br from-green-100 via-white to-green-200"
>
  <Outlet />
</main>


        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default AdminLayout;
