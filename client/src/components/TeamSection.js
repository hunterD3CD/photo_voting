import * as React from "react";

// ----------------------------------------------------MUI------------------------------------------------------
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

// import images
import team1 from "../assets/img/chao.jpg";
import team2 from "../assets/img/angela.jpg";
import team3 from "../assets/img/janelu.jpg";

export default function TeamSection() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* -------------------------------------CARD 1-------------------------------------- */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={team1} alt="hunter" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chao Deng
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hey, I'm Chao but people can call me Hunter. I worked in Seattle
              for 2 years. I don't have much time for hobbies these days. But in
              the future, I'd like to try pottery. And I start enjoying write
              the code and want to know more about it!
            </Typography>
            <Link href="https://github.com/hunterD3CD">
              <GitHubIcon />{" "}
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* --------------------------------------CARD 2------------------------------------- */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={team2} alt="Angela" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Angela Julian
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Angela is an SF bay native and has worked as a QA engineer at
              companies such as Amazon and Businesswire. She is has two sisters
              who get to choose the photos their family sends to family and
              friends. Her eyes have been closed in every photo card sent out.
            </Typography>
            <Link href="https://github.com/angelajulian">
              <GitHubIcon />{" "}
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* --------------------------------------CARD 3------------------------------------- */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={team3} alt="Jane" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jane Lu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Her reason to create this app is not only to help people vote on
              the photos they like, and forever “destroy” the photos they wish
              to bury. Secretly she wants to take this opportunity to see who
              selects “like” on to the photos only him/herself looks awesome and
              others don’t. Like a friendship test. sneaky eh!
            </Typography>
            <Link href="https://github.com/JYL-LU">
              <GitHubIcon />{" "}
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
