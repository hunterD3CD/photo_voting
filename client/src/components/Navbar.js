import * as React from "react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

// ----------------------------------------------------MUI------------------------------------------------------
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function ButtonAppBar(props) {
  // set modal display state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tabs = ["Login", "Signup"];

  const [currentTab, setCurrentTab] = React.useState("Login");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* if user is logged in show logout, if not show login/signup */}
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
          <Grid container >
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
