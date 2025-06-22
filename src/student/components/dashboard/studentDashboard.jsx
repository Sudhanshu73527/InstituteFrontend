import React from 'react';
import { Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import { Assignment, Grade, CalendarToday } from '@mui/icons-material';

const studentDashboard = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* Dashboard Stats */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Assignment sx={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="div">Upcoming Assignments</Typography>
            <Typography variant="body1">3 assignments due this week.</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Grade sx={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="div">Your Grades</Typography>
            <Typography variant="body1">You have a B+ in Computer Science.</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <CalendarToday sx={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="div">Schedule</Typography>
            <Typography variant="body1">You have a lecture at 2 PM today.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default studentDashboard;
