import React, { useState } from "react";
import "./TatImg.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel  from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
function TatImg({ imgUrls }) {
  const [showImg, setShowImg] = useState(true);
  setInterval(() => {
    setShowImg(!showImg);
   
  }, 4000);


  return (
    <div className="container" >

      <Carousel variant="dark" controls={false} interval={4000}>
      <Carousel.Item>
      {showImg?<div>
          <img src={imgUrls[0]} alt="story1" />
        <Carousel.Caption>
          <h5 className='btn btn-info'>Story1</h5>
        </Carousel.Caption>
        </div>:<h2 className='text-center border rounded border-secondary mb-3 border-5 p-5'>Next picture in 4 minutes</h2>}
      </Carousel.Item>
      <Carousel.Item>
      {showImg?<div>
          <img src={imgUrls[1]} alt="story1" />
        <Carousel.Caption>
          <h5  className='btn btn-info '>Story2</h5>
        </Carousel.Caption>
        </div>:<h2 className=' text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next picture in 4 minutes</h2>}
      </Carousel.Item>
      <Carousel.Item>
      {showImg?<div>
          <img src={imgUrls[2]} alt="story1" />
        <Carousel.Caption>
          <h5 className='btn btn-info'>Story3</h5>
        </Carousel.Caption>
        </div>:<div>
        <img className="ant-image-img" alt="bg-img" src="https://media.geeksforgeeks.org/auth-dashboard-uploads/dev1.png" style={{"height": "180px", "border-radius": "15px"}}/>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next picture in 4 minutes</h2></div>}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default TatImg;
