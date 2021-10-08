import React, { useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { useDropzone } from "react-dropzone";

// ----------------------------------------------------MUI------------------------------------------------------
import { Button, Grid, TextField, Typography } from "@mui/material";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const UploadPhoto = (props) => {
  state = {
    users: [],
    file: null,
    name: null,
  };

  onDrop = async (files) => {
    this.setState({ file: files[0] });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // ---------------------------------------------------JSX---------------------------------------------------------
  render() {
    const paperStyle = {
      padding: 0,
      height: "40vh",
      width: "70%",
      margin: 100,
      background: "white",
      borderRadius: 8,
      boxShadow: "15px 15px 10px 1px rgba(255, 105, 135, .3)",
    };

    const buttonStyle = {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 8,
      boxShadow: "0 3px 20px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    };
    return (
      <Grid
        container
        spacing={2}
        style={paperStyle}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem xs={12} {...getRootProps()} style={{ margin: "20px" }}>
          <input {...getInputProps()} />
          <Typography style={{ margin: "20px" }}>
            Click here to upload a photo!
          </Typography>
        </GridItem>

        <Grid item xs={9}>
          <TextField
            required
            fullWidth
            id="Tag"
            label="Tag your friends here"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={9}>
          <Button
            onClick={this.submit}
            style={buttonStyle}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Upload
          </Button>
        </Grid>
        <br />
      </Grid>
    );
  }
}

export default UploadPhoto;
