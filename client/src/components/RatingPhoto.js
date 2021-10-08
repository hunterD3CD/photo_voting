import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';


import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const customIcons = {
  1: {
    icon: <ThumbUpOutlinedIcon />,
    label: 'like',
  },
  2: {
    icon: <ThumbDownOutlinedIcon />,
    label: 'dislike',
  },
  
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const RatingPhoto = (props) => {
  
  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
      max={2}
    />
  );
};

export default RatingPhoto;