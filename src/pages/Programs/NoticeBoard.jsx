import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const notices = [
  {
    id: 1,
    title: "Semester 1 Exam Schedule Released",
    date: "2025-07-15",
    description: "The timetable for Semester 1 exams has been uploaded. Please download it from the portal.",
  },
  {
    id: 2,
    title: "Admit Card Available",
    date: "2025-07-10",
    description: "Students can now download their admit cards from the Admit Card section.",
  },
  {
    id: 3,
    title: "Project Submission Deadline",
    date: "2025-07-20",
    description: "Final year students must submit their project files by 20th July.",
  },
  {
    id: 4,
    title: "Result Announcement (Tentative)",
    date: "2025-08-01",
    description: "Results for all batches are expected to be released in the first week of August.",
  },
];

const NoticeBoard = () => {
  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        🗂️ Notice Board
      </Typography>

      <Paper elevation={3} sx={{ p: 3, backgroundColor: "#fafafa" }}>
        <List>
          {notices.map((notice, index) => (
            <React.Fragment key={notice.id}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <NotificationsActiveIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" fontWeight="bold">
                      {notice.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Box display="flex" alignItems="center" gap={1}>
                        <CalendarTodayIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                        <Typography variant="caption" color="text.secondary">
                          {new Date(notice.date).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" mt={0.5}>
                        {notice.description}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < notices.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default NoticeBoard;
