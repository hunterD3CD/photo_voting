import React from "react";

// ----------------------------------------------------MUI------------------------------------------------------
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";

const SignupForm = () => {
  const paperStyle = {
    padding: 0,
    height: "60vh",
    width: "250px",
    margin: 0,
  };
  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <Grid lg={12} xs={12} item align="center">
      <Paper style={paperStyle}>
        <Avatar style={{ margin: "20px 0" }}>
          <GroupAddTwoToneIcon />
        </Avatar>
        <TextField
          required
          fullWidth
          id="Username"
          label="Username"
          variant="outlined"
          style={{ margin: "5px 0" }}
        />
        <TextField
          required
          fullWidth
          id="Email"
          label="Email"
          variant="outlined"
          style={{ margin: "5px 0" }}
        />
        <TextField
          required
          fullWidth
          id="Password"
          label="Password"
          variant="outlined"
          style={{ margin: "5px 0" }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={{ margin: "15px 0" }}
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
};

export default SignupForm;
