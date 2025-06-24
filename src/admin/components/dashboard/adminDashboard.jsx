import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
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
  // Dummy function to handle file download
  const handleDownload = (fileName) => {
    console.log(`Downloading ${fileName}`);
    // You can replace this with actual file fetching logic
  };

  return (
    <main className="p-4 bg-gradient-to-br from-green-100 via-white to-green-200 w-full min-h-screen overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Student Dashboard
      </h1>

      <Grid container spacing={3} sx={{ padding: { xs: 2, sm: 3 }, marginTop: 2 }}>
        {/* Existing Cards */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <Assignment sx={{ fontSize: 60, color: "#3f51b5" }} />
              <Typography variant="h6" component="div" sx={{ marginTop: 2, fontWeight: 600 }}>
                Upcoming Assignments
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                3 assignments due this week.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <Grade sx={{ fontSize: 60, color: "#3f51b5" }} />
              <Typography variant="h6" component="div" sx={{ marginTop: 2, fontWeight: 600 }}>
                Your Grades
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                You have a B+ in Computer Science.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <CalendarToday sx={{ fontSize: 60, color: "#3f51b5" }} />
              <Typography variant="h6" component="div" sx={{ marginTop: 2, fontWeight: 600 }}>
                Schedule
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                You have a lecture at 2 PM today.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Document Download Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Download Documents</h2>

        <Grid container spacing={3}>
          {/* Hall Ticket */}
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <CloudDownload sx={{ fontSize: 40, color: "#3f51b5" }} />
                <Typography variant="h6" component="div" sx={{ marginTop: 2, fontWeight: 600 }}>
                  Hall Ticket
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => handleDownload("Hall Ticket")}
                >
                  Download
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* ID Card */}
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <CloudDownload sx={{ fontSize: 40, color: "#3f51b5" }} />
                <Typography variant="h6" component="div" sx={{ marginTop: 2, fontWeight: 600 }}>
                  ID Card
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => handleDownload("ID Card")}
                >
                  Download
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Certificates */}
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <CloudDownload sx={{ fontSize: 40, color: "#3f51b5" }} />
                <Typography variant="h6" component="div" sx={{ marginTop: 2, fontWeight: 600 }}>
                  Certificates
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => handleDownload("Certificate")}
                >
                  Download
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </section>
    </main>
  );
};

export default AdminDashboard;
