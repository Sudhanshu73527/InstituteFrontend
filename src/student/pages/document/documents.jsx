import React from "react";
import { Button, Grid, Typography } from "@mui/material";

const Documents = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Download Documents
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Hall Ticket
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            ID Card
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Final Result
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Documents;
