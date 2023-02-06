import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
var Carousel = require('react-responsive-carousel').Carousel;
function carl() {
    return(
        <Carousel showArrows={true} emulateTouch={true} showStatus={false} animationHandler="fade" infiniteLoop={true} transitionTime={1500} showThumbs={false} showIndicators={false}  autoPlay={true} interval={3000}>
        <div>
            <img src="https://m.economictimes.com/thumb/msid-95129371,width-1599,height-886,resizemode-4,imgsize-142484/srinagar-enactment-of-air-landed-operations-of-the-indian-army-which-ensured-vi-.jpg" />
        </div>
        <div>
            <img src="https://static.theprint.in/wp-content/uploads/2020/02/Indian-Army-4.jpg?compress=true&quality=80&w=800&dpr=1.3" />
        </div>
        <div>
            <img src="https://images.thequint.com/thequint%2F2020-07%2Fc8b5b0b2-5ab9-4aea-8ae7-1e9f431c5afe%2F2020_7_img28_Jul_2020_PTI28_07_2020_000074B.jpg?rect=0%2C0%2C3776%2C2124&auto=format%2Ccompress&fmt=webp&width=720" />
        </div>
    </Carousel>
    )
}

export default carl;