import React from 'react';
import "./SwipeButtons.css";
import IconButton from '@material-ui/core/IconButton'

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>   
                <ReplayIcon className="swipeButtons__repeat" fontSize="large" />
            </IconButton> 
            <IconButton>  
                <CloseIcon className="swipeButtons__left" fontSize="large" />
            </IconButton> 
            <IconButton>  
                <StarRateIcon className="swipeButtons__star" fontSize="large" />
            </IconButton> 
            <IconButton>  
                <FavoriteIcon className="swipeButtons__right" fontSize="large" />
            </IconButton> 
            <IconButton>  
                <FlashOnIcon className="swipeButtons__lightning" fontSize="large" />
            </IconButton> 
        </div>
    );
}

export default SwipeButtons;