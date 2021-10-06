import * as React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
// import PhotoVote from "../pages/PhotoVote"

// ----------------------------------------------------MUI------------------------------------------------------
import {Grid, Box, AppBar, Toolbar, Typography, Button, IconButton, Dialog, DialogContent} from "@mui/material";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";

const ButtonAppBar = (props) => {
  // set modal display state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tabs = ["Login", "Signup"];

  const [currentTab, setCurrentTab] = React.useState("Login");

  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #9198e5 90%)",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ThumbsUpDownIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Photo Voting
            </Typography>
            {/* /////////////////////////////////////////////////////////////// */}
            <HomeIcon />
            <Button color="inherit" href="/">Home</Button>
           
            <VerticalSplitIcon />
            <Button color="inherit" href="/photo">View Photo</Button>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* if user is logged in show logout, if not show login/signup */}
            <ExitToAppIcon />
            <Button onClick={handleOpen} color="inherit">
              Login/Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* set modal data up */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent>
          <Grid container>
            {tabs.map((tab, index) => {
              return (
                <Grid item key={index}>
                  <Button
                    onClick={() => setCurrentTab(tab)}
                    style={{ margin: 0 }}
                  >
                    {tab}
                  </Button>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              {currentTab === "Login" ? (
                <LoginForm handleModalClose={handleClose} />
              ) : (
                <SignUpForm />
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ButtonAppBar;