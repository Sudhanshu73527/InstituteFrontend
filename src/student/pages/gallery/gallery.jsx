import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Gallery = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Photo Gallery
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <img src="/gallery-img1.jpg" alt="Gallery Image 1" width="100%" />
              <Typography variant="body2" color="textSecondary">Event 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <img src="/gallery-img2.jpg" alt="Gallery Image 2" width="100%" />
              <Typography variant="body2" color="textSecondary">Event 2</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Gallery;
