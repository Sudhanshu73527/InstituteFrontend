import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #d1fae5, #ffffff, #a7f3d0)", // Subtle gradient
        color: "#111827", // Dark grayish-blue for better readability
        padding: 3, // Slightly increased padding for a balanced look
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
        mt: 4, // Add margin-top for spacing from content above
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        © 2025 Admin Dashboard. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href="#" color="inherit" sx={{ fontWeight: 600 }}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit" sx={{ fontWeight: 600 }}>
          Terms & Conditions
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
