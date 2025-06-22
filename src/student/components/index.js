import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Dashboard, Book, Assignment, Grade, CalendarToday, Settings, ExitToApp } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        bgcolor: '#3f51b5',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 2,
      }}
    >
      {/* Profile Section */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <img src="profile_pic_url" alt="Student" style={{ width: 60, borderRadius: '50%' }} />
        <h3>John Doe</h3>
        <p>Student</p>
      </Box>

      <Divider />

      {/* Navigation Links */}
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Dashboard sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/courses">
          <ListItemIcon><Book sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component={Link} to="/assignments">
          <ListItemIcon><Assignment sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Assignments" />
        </ListItem>
        <ListItem button component={Link} to="/grades">
          <ListItemIcon><Grade sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Grades" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon><CalendarToday sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Schedule" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><Settings sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/logout">
          <ListItemIcon><ExitToApp sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
