import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className="swipeButton">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon  fontSize="large"/>
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large"/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons