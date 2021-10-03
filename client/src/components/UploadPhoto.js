import React from "react";

// ----------------------------------------------------MUI------------------------------------------------------
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const UploadPhoto = () => {
  const paperStyle = {
    padding: 0,
    height: "40vh",
    width: "500px",
    margin: 100,
  };
  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <Grid lg={12} xs={12} item >
      <Paper style={paperStyle}>
        <Grid Container>
          <Grid item lg={6} xs={6}>
            <Avatar style={{ margin: "20px 0" }}>
              <UploadRoundedIcon />
            </Avatar>
          </Grid>
          <Grid item lg={6} xs={6}>
            <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={{ margin: "15px 0" }}
            >
            Upload
            </Button>
            </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default UploadPhoto;
