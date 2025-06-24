import React from "react";
import { Typography, Card, CardContent, Avatar } from "@mui/material";

const Profile = () => {
  return (
    <Card>
      <CardContent>
        <Avatar alt="Student Name" src="/student-profile.jpg" sx={{ width: 100, height: 100, marginBottom: 2 }} />
        <Typography variant="h5">John Doe</Typography>
        <Typography variant="body1">Major: Computer Science</Typography>
        <Typography variant="body2" color="textSecondary">Graduation Year: 2023</Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
