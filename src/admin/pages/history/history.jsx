import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const History = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Document Download History
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Hall Ticket - Downloaded on 2023-06-01" />
        </ListItem>
        <ListItem>
          <ListItemText primary="ID Card - Downloaded on 2023-06-05" />
        </ListItem>
      </List>
    </div>
  );
};

export default History;
