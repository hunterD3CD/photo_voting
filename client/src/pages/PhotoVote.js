import React from "react";
import RatingPhoto from "../components/RatingPhoto";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PHOTOS } from "../utils/queries";
// ----------------------------------------------------MUI------------------------------------------------------
// import { Grid} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import {Typography } from "@mui/material";

const PhotoVote = () => {
  const { loading, data } = useQuery(QUERY_PHOTOS);
  const photos = data?.photos || [];
  console.log("photodata:", photos[1]);
  
  

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <>
      <ImageList
        cols={4}
        gap={8}
        xs={{ width: 500, height: 500 }}
        lg={{ width: 2000, height: 500 }}
      >
        {itemData.map((item,index) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
            {/* ----------------------------------- RATING COMPONENT----------------------------------------------- */}
            <RatingPhoto likes={photos[index].likes} dislikes={photos[index].dislikes} />
            <Typography >Vote by: {photos[index].username} </Typography>
          </ImageListItem>
        ))}

      </ImageList>
    </>
  );
};

export default PhotoVote;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
    likes: "9",
    dislikes: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    likes: "9",
    dislikes: "5",
  },
];
