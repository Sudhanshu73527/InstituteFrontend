import React, { useState } from "react";
import { Menu, MenuItem, Box, Divider, Typography, Avatar } from "@mui/material";
import { MdEdit, MdKey, MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";

// Hardcoded user data (aviraj)
const aviraj = {
  userName: "Aviraaj",
  email: "aviraj@example.com",
  role: "Admin",
  phone: "+91 9876543210", // Added phone number
};

const ProfileMenu = ({ anchorEl, handleMenuOpen, handleMenuClose, handleLogout }) => {
  const openMenu = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleMenuClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#f3f4f6", // A softer background color
          minWidth: 240, // Increased minWidth for better layout
          borderRadius: 1,
          boxShadow: 2, // Added some shadow for better separation
        },
      }}
    >
      <Box sx={{ textAlign: "center", padding: 2 }}>
        {/* Profile Avatar */}
        <Avatar
          sx={{
            width: 72,
            height: 72,
            bgcolor: "#1D4ED8",
            margin: "0 auto 8px auto", // Centered Avatar and added margin
            fontSize: 32,
          }}
        >
          {aviraj?.userName?.charAt(0)?.toUpperCase() || "A"} {/* User's first letter */}
        </Avatar>

        {/* Profile Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D4ED8" }}>
          {aviraj?.userName || "User"}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {aviraj?.email || "Email not available"}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {aviraj?.phone || "+91 9876543210"}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {aviraj?.role || "No role assigned"}
        </Typography>
      </Box>

      <Divider sx={{ margin: "8px 0" }} />

      {/* Menu Links */}
      <MenuItem onClick={handleMenuClose}>
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          <MdEdit size={20} style={{ marginRight: 10 }} />
          Edit Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/change-password" style={{ textDecoration: "none", color: "black" }}>
          <MdKey size={20} style={{ marginRight: 10 }} />
          Change Password
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <MdOutlineLogout size={20} style={{ marginRight: 10 }} />
        Logout
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
