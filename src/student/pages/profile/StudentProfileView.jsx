import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  CircularProgress,
  Paper,
  Chip,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfileView = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { studentId } = useParams();
  const theme = useTheme();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/student/${studentId}`);
        setStudent(res.data.student);
      } catch (error) {
        console.error("Error fetching student profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [studentId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!student) {
    return (
      <Typography color="error" align="center">
        Student profile not found.
      </Typography>
    );
  }

  const user = student.userId;
  const course = student.courseId;

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 6, px: 3 }}>
      <Paper elevation={4} sx={{ borderRadius: 4, p: 4 }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {/* Avatar */}
          <Avatar
            alt={`${user?.firstName} ${user?.lastName}`}
            src={student.profilePicture || "/default-avatar.png"}
            sx={{
              width: 120,
              height: 120,
              border: `3px solid ${theme.palette.primary.main}`,
              mx: { xs: "auto", md: 0 },
            }}
          />

          {/* Profile Info */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {user?.firstName} {user?.lastName}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Username" value={user?.username || "-"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Email" value={user?.email || "-"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Phone" value={student.phoneNumber || "-"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Father's Name" value={student.fatherName || "-"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="DOB" value={formatDate(student.dob)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Aadhar Number" value={student.aadharNumber || "-"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Roll Number" value={student.rollNumber || "-"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Passing Year" value={student.passingYear || "-"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue
                  label="Course"
                  value={
                    course
                      ? `${course.name} (${course.code})`
                      : "Not Assigned"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <LabelValue
                  label="Institution"
                  value={`${student.institutionName || "-"}, ${student.institutionAddress || "-"}`}
                />
              </Grid>
              <Grid item xs={12}>
                <LabelValue label="Address" value={student.address || "-"} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight={600} mt={2}>
                  Education Details
                </Typography>
                {student.educationDetails?.length > 0 ? (
                  student.educationDetails.map((edu, idx) => (
                    <Box key={idx} mt={1}>
                      <Typography variant="body2">
                        🎓 <strong>{edu.degree}</strong> in{" "}
                        <strong>{edu.major}</strong> — Grade: {edu.grade}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2">No education details available.</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <LabelValue
                  label="Status"
                  value={
                    <Chip
                      label={capitalize(student.status)}
                      color={student.status === "active" ? "success" : "warning"}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <LabelValue label="Joined On" value={formatDate(student.createdAt)} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default StudentProfileView;

// Reusable component
const LabelValue = ({ label, value }) => (
  <Box mb={1}>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1" fontWeight={500}>
      {value}
    </Typography>
  </Box>
);

const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

const formatDate = (dateStr) =>
  dateStr
    ? new Date(dateStr).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "-";
