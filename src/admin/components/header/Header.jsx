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
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "../../../context/AuthContext"; // ✅ Import context
import { useNavigate } from "react-router-dom";
const Header = ({ toggleSidebar }) => {
  const theme = useTheme();
  const { user,logout } = useAuth(); // ✅ Dynamic user from context
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

 const handleLogout = async () => {
    try {
      await logout(); // ← from context
      navigate("/", { replace: true }); // ← go to homepage
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const initials = `${user?.firstName?.[0] || "G"}${user?.lastName?.[0] || ""}`.toUpperCase();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to bottom right, #d1fae5, #ffffff, #a7f3d0)",
        boxShadow: 3,
        zIndex: theme.zIndex.drawer + 1,
        height: "10vh",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ minHeight: "10vh", display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{
            marginRight: 2,
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            color: "#1D4ED8",
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            color: "#1D4ED8",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Admin Dashboard
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ marginRight: 1, bgcolor: "#1D4ED8", cursor: "pointer" }}
            onClick={handleMenuOpen}
          >
            {initials}
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
            {user?.firstName || "Guest"}
          </Typography>

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
