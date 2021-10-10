import React from "react";
import { Parallax } from "react-parallax";
import UploadPhoto from "../components/UploadPhoto";
import TeamSection from "../components/TeamSection";
// ----------------------------------------------------MUI------------------------------------------------------
// import { makeStyles } from '@material-ui/core';
import { Grid} from "@mui/material";
// import images
import coverImage from "../assets/img/landing-bg.jpg";
import contactImage from "../assets/img/bg.jpg";

const inlineStyle = {
  color: "#fff",
  left: "50%",
  top: "10%",
  position: "relative",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

const Home = () => {
  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <>
      {/* -----------------------------------------------PART 1 Upload------------------------------------------- */}
      <Parallax bgImage={coverImage} strength={500}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Grid item xs={12} style={{ height: 700 }}>
              <h1 style={inlineStyle}>Vote your favorite photo and share!</h1>
              <UploadPhoto />
              <br />
            </Grid>
          </Grid>
        </Grid>
      </Parallax>
      <h1>| | |</h1>

      {/* -----------------------------------------------PART 2 Contact------------------------------------------- */}
      <Parallax
        bgImage={contactImage}
        strength={200}
        renderLayer={(precentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: `rgba(255, 123, 23, ${precentage * 0.3})`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${precentage * 8})`,
            }}
          ></div>
        )}
      >
        <div style={{ height: 1500, margin: "50px" }}>
          <h1 style={inlineStyle}>Here is our team</h1>
          <br />
          <br />
          <br />
          <TeamSection />
        </div>
      </Parallax>
      <h1>| | |</h1>
    </>
  );
};

export default Home;
