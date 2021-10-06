import React from "react";
// ----------------------------------------------------MUI------------------------------------------------------
import { Box, Typography} from "@mui/material";


import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


const RatingPhoto = (props) => {
  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Vote photo</Typography>
      <ThumbUpOffAltIcon />
      {props.likes}
      <ThumbDownAltIcon />
      {props.dislikes}
    </Box>
  );
};

export default RatingPhoto;