import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button, TextField } from "@mui/material";
import { Assignment, Grade, CalendarToday, CloudDownload } from "@mui/icons-material";
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  transition: "transform 0.3s, box-shadow 0.3s",
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: "translateY(-5px)",
    boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2)",
  }
}));

const AdminDashboard = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [studentProfile, setStudentProfile] = useState(null);

  // Dummy function to simulate certificate verification
  const handleVerification = () => {
    if (certificateNumber && studentName && passingYear) {
      // Simulate a successful verification process
      setVerificationResult("Success");
      setStudentProfile({
        name: studentName,
        certificateNumber: certificateNumber,
        passingYear: passingYear,
        status: "Verified"
      });
    } else {
      setVerificationResult("Failure");
      setStudentProfile(null);
    }
  };

  return (
    <main className="p-4 bg-gradient-to-br from-green-100 via-white to-green-200 w-full min-h-screen overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Verification Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Verify Certificate</h2>
        
        

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Certificate Verification</Typography>

                <TextField
                  label="Certificate Number"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                />
                <TextField
                  label="Student Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
                <TextField
                  label="Passing Year"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                />

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                  fullWidth
                  onClick={handleVerification}
                >
                  Verify Certificate
                </Button>

                {verificationResult && (
                  <Typography variant="body1" sx={{ mt: 2, color: verificationResult === "Success" ? "green" : "red" }}>
                    {verificationResult === "Success" ? "Verification Success!" : "Verification Failed. Please check the details."}
                  </Typography>
                )}

                {studentProfile && (
                  <Card sx={{ mt: 3 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>Student Profile Summary</Typography>
                      <Typography variant="body1">Name: {studentProfile.name}</Typography>
                      <Typography variant="body1">Certificate Number: {studentProfile.certificateNumber}</Typography>
                      <Typography variant="body1">Passing Year: {studentProfile.passingYear}</Typography>
                      <Typography variant="body1">Status: {studentProfile.status}</Typography>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </section>

      {/* Other Sections */}
      <Grid container spacing={3} sx={{ padding: { xs: 2, sm: 3 }, marginTop: 2 }}>
        {/* Existing Cards */}
       add other sections soon .. development mode
      
  
      </Grid>
    </main>
  );
};

export default AdminDashboard;
