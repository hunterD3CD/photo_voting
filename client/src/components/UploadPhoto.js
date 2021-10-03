import React from "react";

// ----------------------------------------------------MUI------------------------------------------------------
import { Button, Grid, TextField,Typography } from "@mui/material";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const UploadPhoto = () => {
  const paperStyle = {
    padding: 0,
    height: "40vh",
    width: "70%",
    margin: 100,
    background: "white",
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  };

  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <Grid container spacing={2} style={paperStyle} justifyContent="center" alignItems="center">
      <Typography xs={12} style={{ margin: '20px' }}>Hey! Wecomle to our website. Upload your nice photo below and share with your friends.</Typography>
      <Grid item xs={2}>
        <UploadRoundedIcon fontSize="large"/>
      </Grid>
      <Grid item xs={9}>
        <Button style={buttonStyle} type="submit" color="primary" variant="contained" fullWidth>
          Upload
        </Button>
      </Grid>
      <Grid item xs={2}>
        <SendRoundedIcon fontSize="large" />
      </Grid>
      <Grid item xs={9}>
        <TextField
           required
           fullWidth
           id="Tag"
           label="Tag your friends here"
           variant="outlined"
        />
      </Grid>
      <br />
    </Grid>
  );
};

export default UploadPhoto;
