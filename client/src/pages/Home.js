import React from "react";
import {Parallax} from "react-parallax";
import UploadPhoto from "../components/UploadPhoto"
// ----------------------------------------------------MUI------------------------------------------------------
// import { makeStyles } from '@material-ui/core';
import {Grid} from "@mui/material";
import coverImage from "../assets/img/landing-bg.jpg"
import contactImage from "../assets/img/bg.jpg"

  const inlineStyle = {
    color: '#fff',
    left: '60%',
    top: '20%',
    position: 'relative',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }

const Home = () => {

  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <>
    {/* -----------------------------------------------PART 1------------------------------------------- */}
    <Parallax bgImage={ coverImage } strength={500}>
      <Grid Container>
        <Grid Item xs={12} sm={12} md={6}>
          <div style={{ height: 500 }}>
              <h1 style={inlineStyle}>Vote your favorite photo and share!</h1>
              <UploadPhoto />
              <br />
          </div>
        </Grid>
      </Grid>
    </Parallax>
     <h1>| | |</h1>

    {/* -----------------------------------------------PART 2------------------------------------------- */}
      <Parallax 
        bgImage={ contactImage }
        strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Render prop</div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    
    </>
  );
};

export default Home;
