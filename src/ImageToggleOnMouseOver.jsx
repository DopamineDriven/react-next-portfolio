import React, { useRef } from 'react';
// import {primaryImg, secondaryImg } from '../pages/imageChangeOnMouseOver'

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    
    const imageRef = useRef(null);

    return(
        <img onMouseOver={() => {
            imageRef.current.src = secondaryImg
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg
        }} 
            src={primaryImg} 
            alt=""
            ref={imageRef}
        />
    )
}

export default ImageToggleOnMouseOver;