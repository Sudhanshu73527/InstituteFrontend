import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Header = ({ toggleSidebar, userName }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to bottom right, #d1fae5, #ffffff, #a7f3d0)", // Gradient from green-100 to white to green-200
        boxShadow: 3,
        zIndex: theme.zIndex.drawer + 1, // ensures header is above sidebar
        height: "10vh", // consistent header height
        justifyContent: "center", // vertically center Toolbar
      }}
    >
      <Toolbar sx={{ minHeight: "10vh", display: "flex", justifyContent: "space-between" }}>
        {/* Always show the Mobile Menu Icon (for both mobile and desktop) */}
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
          <Menu />
        </IconButton>

        {/* Dashboard Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            color: "#1D4ED8", // Professional blue color (tailwind blue-600)
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Admin Dashboard
        </Typography>

        {/* User Profile Avatar and Name - Display on both mobile and desktop */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* User Avatar and Name */}
          <Avatar sx={{ marginRight: 1, bgcolor: "#1D4ED8" }}>
            {/* Optionally display the user's first letter or initials */}
            {userName?.charAt(0)?.toUpperCase() || "G"}
          </Avatar>
          <Typography variant="body1" sx={{ color: "#1D4ED8", display: { xs: "none", sm: "block" } }}>
            {userName || "Guest"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
