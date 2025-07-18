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
import { getProfile } from "../../../services/authApi";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setProfile(res.data.userProfileDetail);
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
        <CircularProgress />
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
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 6, px: 3 }}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: 4,
          background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          p: 4,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          {/* Avatar Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: { sm: 5 },
              mb: { xs: 3, sm: 0 },
            }}
          >
            <Avatar
              alt={`${profile.firstName} ${profile.lastName}`}
              src={profile.avatar || "/default-avatar.png"}
              sx={{
                width: 120,
                height: 120,
                border: `3px solid ${theme.palette.primary.main}`,
              }}
            />
          </Box>

          {/* Content Section */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {profile.firstName} {profile.lastName}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Username" value={profile.username} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Email" value={profile.email} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Role" value={capitalize(profile.role)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue
                  label="Status"
                  value={
                    <Chip
                      label={capitalize(profile.status)}
                      color={profile.status === "active" ? "success" : "warning"}
                      variant="outlined"
                      size="small"
                    />
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue
                  label="Email Verified"
                  value={
                    <Chip
                      label={profile.isEmailVerified ? "Verified" : "Not Verified"}
                      color={profile.isEmailVerified ? "primary" : "error"}
                      variant="outlined"
                      size="small"
                    />
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabelValue label="Last Login" value={formatDateTime(profile.lastLogin)} />
              </Grid>
              <Grid item xs={12}>
                <LabelValue label="Joined On" value={formatDate(profile.createdAt)} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default Profile;

// Reusable Components
const LabelValue = ({ label, value }) => (
  <Box>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1" fontWeight={500}>
      {value}
    </Typography>
  </Box>
);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const formatDateTime = (date) => new Date(date).toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", { dateStyle: "long" });
