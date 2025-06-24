// ProgressBar.jsx
import React from "react";
import { LinearProgress, Box } from "@mui/material";

const ProgressBar = ({ progressWidth }) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <LinearProgress variant="determinate" value={progressWidth} />
    </Box>
  );
};

export default ProgressBar;
