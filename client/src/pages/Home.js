import React from "react";
import { Parallax } from "react-parallax";
import UploadPhoto from "../components/UploadPhoto";
import TeamSection from "../components/TeamSection";
// ----------------------------------------------------MUI------------------------------------------------------
import { Grid } from "@mui/material";
import coverImage from "../assets/img/landing-bg.jpg";
import contactImage from "../assets/img/bg.jpg";

const inlineStyle = {
  color: "#fff",
  left: "60%",
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
            <div style={{ height: 700 }}>
              <h1 style={inlineStyle}>
                Vote on photos with friends and share!
              </h1>
              <UploadPhoto />
              <br />
            </div>
          </Grid>
        </Grid>
      </Parallax>

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
        <div style={{ height: 700, margin: "50px" }}>
          <h1 style={inlineStyle}>Our team</h1>
          <br />
          <br />
          <TeamSection />
        </div>
      </Parallax>
    </>
  );
};

export default Home;
