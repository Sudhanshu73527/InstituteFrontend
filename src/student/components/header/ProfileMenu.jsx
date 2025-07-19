import React from "react";
import {
  Menu,
  MenuItem,
  Box,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import { MdEdit, MdKey, MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth  } from "../../../context/AuthContext"; // Adjust path as needed

const ProfileMenu = ({ anchorEl, handleMenuClose, handleLogout }) => {
  const openMenu = Boolean(anchorEl);
  const { user } = useAuth();

  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();
  const initials =
    (user?.firstName?.[0] || "") + (user?.lastName?.[0] || "");

  return (
    <Menu
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleMenuClose}
      PaperProps={{
        sx: {
          backgroundColor: "#f9fafb",
          minWidth: 250,
          borderRadius: 2,
          boxShadow: 4,
          paddingY: 1,
        },
      }}
    >
      <Box sx={{ textAlign: "center", p: 2 }}>
        <Avatar
          sx={{
            width: 72,
            height: 72,
            bgcolor: "#1D4ED8",
            margin: "0 auto 8px auto",
            fontSize: 28,
          }}
        >
          {initials.toUpperCase() || "U"}
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D4ED8" }}>
          {fullName || "User"}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {user?.email || "No email"}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {user?.phone || "+91 9876543210"}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", textTransform: "capitalize" }}>
          {user?.role || "No role"}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
        <MdEdit size={20} style={{ marginRight: 10 }} />
        Edit Profile
      </MenuItem>

      <MenuItem onClick={handleMenuClose} component={Link} to="/change-password">
        <MdKey size={20} style={{ marginRight: 10 }} />
        Change Password
      </MenuItem>

      <MenuItem onClick={handleLogout}>
        <MdOutlineLogout size={20} style={{ marginRight: 10 }} />
        Logout
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
