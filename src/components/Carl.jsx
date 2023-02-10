import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function carl() {
    return(
        <Carousel autoPlay={true} showArrows={true}  showStatus={false} animationHandler="fade" infiniteLoop={true} transitionTime={1500} showThumbs={false} showIndicators={false}  interval={3000}>
        <div>
            <img src="https://m.economictimes.com/thumb/msid-95129371,width-1599,height-886,resizemode-4,imgsize-142484/srinagar-enactment-of-air-landed-operations-of-the-indian-army-which-ensured-vi-.jpg" />
        </div>
        <div>
            <img src="https://static.theprint.in/wp-content/uploads/2020/02/Indian-Army-4.jpg?compress=true&quality=80&w=800&dpr=1.3" />
        </div>
        <div>
            <img src="https://defencedirecteducation.com/wp-content/uploads/2021/10/important-days-defence-1-1320x880.jpeg" />
        </div>
    </Carousel>
    )
}

export default carl;