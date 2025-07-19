import React, { useEffect, useState } from "react";
import { Box, Button, Typography, CircularProgress, Alert } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import { checkAdmitCardAvailability, generateSingleAdmitCard } from "../../../services/admitApi"; // ✅ Import the API functions

const AdmitCardDownload = () => {
  const { user, student } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const checkAvailability = async () => {
    try {
      const res = await checkAdmitCardAvailability(student._id);
      setIsAvailable(res.data.available);
    } catch (err) {
      console.error(err);
      setError("Failed to check admit card status.");
    } finally {
      setLoading(false);
    }
  };

  if (student?._id) {
    checkAvailability();
  }
}, [student]);

  const handleDownload = async () => {
    try {
      const res = await generateSingleAdmitCard(student._id);

      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `admit_card_${student.rollNumber || "student"}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download error:", err);
      setError("Error downloading admit card. Try again later.");
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
        🎓 Admit Card
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {isAvailable ? (
        <>
          <Typography variant="body1" gutterBottom>
            Your admit card is now available. Click below to download it.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleDownload}
            sx={{ mt: 2 }}
          >
            Download Admit Card
          </Button>
        </>
      ) : (
        <Alert severity="info" sx={{ mt: 4 }}>
          📢 Your admit card is not released yet. Please check back later.
        </Alert>
      )}
    </Box>
  );
};

export default AdmitCardDownload;
