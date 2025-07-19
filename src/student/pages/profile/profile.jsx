import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Paper,
  Chip,
  Avatar,
  Divider,
  useTheme,
  Badge,
} from "@mui/material";
import { getProfile } from "../../../services/authApi";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setProfile(res.data.userProfileDetail);
        setStudent(res.data.studentDetail);
      } catch (error) {
        console.error("❌ Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!profile) {
    return (
      <Typography align="center" color="error">
        Profile not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", mt: 6, px: 2 }}>
      <Paper
        elevation={8}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* Banner */}
        <Box
          sx={{
            height: 180,
            background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          }}
        />

        {/* Avatar & Name */}
        <Box
          sx={{
            px: 4,
            mt: -10,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            alignItems: "center",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              profile.isEmailVerified && (
                <Chip label="✔" size="small" color="primary" />
              )
            }
          >
            <Avatar
              src={profile.avatar || "/default-avatar.png"}
              alt={`${profile.firstName} ${profile.lastName}`}
              sx={{
                width: 130,
                height: 130,
                border: `4px solid ${theme.palette.background.paper}`,
              }}
            />
          </Badge>

          <Box>
            <Typography variant="h4" fontWeight={700}>
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {capitalize(profile.role)}
            </Typography>
            <Box mt={1} display="flex" gap={1} flexWrap="wrap">
              <Chip
                label={capitalize(profile.status)}
                color={profile.status === "active" ? "success" : "warning"}
                size="small"
              />
              <Chip
                label={profile.isEmailVerified ? "Email Verified" : "Not Verified"}
                color={profile.isEmailVerified ? "primary" : "error"}
                size="small"
              />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Profile Info */}
        <Box px={4} pb={4}>
          <Typography variant="h6" gutterBottom>
            Profile Info
          </Typography>
          <Grid container spacing={2}>
            <Detail label="Username" value={profile.username} />
            <Detail label="Email" value={profile.email} />
            <Detail label="Last Login" value={formatDateTime(profile.lastLogin)} />
            <Detail label="Joined On" value={formatDate(profile.createdAt)} />
          </Grid>

          {/* Student Info */}
          {student && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" gutterBottom>
                Student Details
              </Typography>
              <Grid container spacing={2}>
                <Detail label="Phone Number" value={student.phoneNumber} />
                <Detail label="Father's Name" value={student.fatherName} />
                <Detail label="DOB" value={formatDate(student.dob)} />
                <Detail label="Aadhar Number" value={student.aadharNumber} />
                <Detail label="Roll Number" value={student.rollNumber} />
                <Detail label="Passing Year" value={student.passingYear} />
                <Detail
                  label="Course"
                  value={
                    student.courseId
                      ? `${student.courseId.name} (${student.courseId.code})`
                      : "Not Assigned"
                  }
                />
                <Detail
                  label="Institution"
                  value={`${student.institutionName || "-"}, ${student.institutionAddress || "-"}`}
                />
                <Detail label="Address" value={student.address} />
                <Detail
                  label="Student Status"
                  value={
                    <Chip
                      label={capitalize(student.status)}
                      color={student.status === "active" ? "success" : "warning"}
                      size="small"
                    />
                  }
                />
                <Detail label="Enrolled On" value={formatDate(student.createdAt)} />
              </Grid>

              {/* Education Details */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Education History
                </Typography>
                {student.educationDetails?.length > 0 ? (
                  <Grid container spacing={1} mt={1}>
                    {student.educationDetails.map((edu, idx) => (
                      <Grid item xs={12} key={idx}>
                        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                          <Typography variant="body2">
                            🎓 <strong>{edu.degree}</strong> in <strong>{edu.major}</strong>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Grade: {edu.grade}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography variant="body2" mt={1}>
                    No education details available.
                  </Typography>
                )}
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;

// Detail helper
const Detail = ({ label, value }) => (
  <Grid item xs={12} sm={6}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1" fontWeight={500}>
      {value || "-"}
    </Typography>
  </Grid>
);

// Utility Functions
const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);
const formatDateTime = (date) =>
  date
    ? new Date(date).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })
    : "-";
const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "-";
