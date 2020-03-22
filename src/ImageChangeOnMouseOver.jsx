import React from 'react';
// gives react app a way to work with an element directly in the DOM
// anything we put in folder titled static will be available to our app
// with the /static reference
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver.jsx';
import colorImg from '/static/img/images/1.jpg';
import bwImage from '/static/img/images/bw/1.jpg';


const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg={bwImage} secondaryImg={colorImg} alt="" height="400" width="400"/>
            {/* &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="../static/speakers/bw/Speaker-1124.jpg" secondaryImg="../static/speakers/Speaker-1124.jpg" alt=""/> */}
        </div>
    )
};

export default ImageChangeOnMouseOver;













// useRef returns a mutable ref object whose 
// .current property is initialized to the passed argument (initialValue). 
// The returned object will persist for the full lifetime of the component.
// Note that useRef() is useful for more than the ref attribute. 
// It’s handy for keeping any mutable value around 
// similar to how you’d use instance fields in classes.