import * as React from "react";

// ----------------------------------------------------MUI------------------------------------------------------
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography gutterBottom variant="subtitle1" style={{padding: 20}}>
        © 2021 , made with by an awesome team from bootcamp.
      </Typography>
    </Grid>
  );
}
