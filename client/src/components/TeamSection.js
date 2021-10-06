import * as React from "react";

// ----------------------------------------------------MUI------------------------------------------------------
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

// import images
import team1 from "../assets/img/bg3.jpg";
import team2 from "../assets/img/bg4.jpg";
import team3 from "../assets/img/bg7.jpg";

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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Link href="https://github.com/hunterD3CD?tab=repositories">
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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Link href="https://github.com/hunterD3CD?tab=repositories">
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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Link href="https://github.com/hunterD3CD?tab=repositories">
              <GitHubIcon />{" "}
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
