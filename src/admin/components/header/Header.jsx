// Header.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import ProfileMenu from "./ProfileMenu"; // Import the UserProfileMenu component

const Header = ({ toggleSidebar }) => {
  const theme = useTheme();
 const aviraj = {
    userName: "Aviraaj",
    email: "aviraj@example.com",
    role: "Admin",
  };
  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle profile menu toggle
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Perform logout action here
    console.log("User logged out");
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to bottom right, #d1fae5, #ffffff, #a7f3d0)", // Green gradient
        boxShadow: 3,
        zIndex: theme.zIndex.drawer + 1, // Ensures header is above sidebar
        height: "10vh",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ minHeight: "10vh", display: "flex", justifyContent: "space-between" }}>
        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{
            marginRight: 2,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)", // Lighter hover effect
            },
            color: "#1D4ED8", // Set menu icon color to blue
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dashboard Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            color: "#1D4ED8", // Professional blue color
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Admin Dashboard
        </Typography>

        {/* User Profile Avatar and Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ marginRight: 1, bgcolor: "#1D4ED8", cursor: "pointer" }}
            onClick={handleMenuOpen}
          >
            {/* Display user's first letter or initials */}
            {aviraj?.userName?.charAt(0)?.toUpperCase() || "G"}
          </Avatar>
          <Typography
            variant="body1"
            sx={{
              color: "#1D4ED8",
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
            onClick={handleMenuOpen}
          >
            {aviraj?.userName || "Guest"}
          </Typography>

          {/* Profile Menu */}
          <ProfileMenu
            anchorEl={anchorEl}
            handleMenuOpen={handleMenuOpen}
            handleMenuClose={handleMenuClose}
            handleLogout={handleLogout}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
