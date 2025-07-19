import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import {
  generateMarksheetPDF,
  checkResultAvailability,
} from "../../../services/marksheetApi"; 

const ResultCardDownload = () => {
  const { student } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const res = await checkResultAvailability(student._id);
        setIsAvailable(res.data.available);
      } catch (err) {
        console.error("Error checking result availability:", err);
        setError("Failed to check result status. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (student?._id) {
      fetchAvailability();
    }
  }, [student]);

  const handleDownload = async () => {
    try {
      const res = await generateMarksheetPDF(student._id);
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `result_card_${student.rollNumber || "student"}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download error:", err);
      setError("Error downloading result card. Try again later.");
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        🧾 Result Card
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {isAvailable ? (
        <>
          <Typography variant="body1" gutterBottom>
            Your result card is now available. Click below to download it.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleDownload}
            sx={{ mt: 2 }}
          >
            Download Result Card
          </Button>
        </>
      ) : (
        <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: "#f5f5f5" }}>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            📢 Result Card Not Released Yet
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            We're working hard to finalize your results. Please check back later.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Expected release: <strong>Coming Soon</strong>
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default ResultCardDownload;
