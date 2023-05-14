import React, { useState } from "react";
import "./WatWord.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel  from "react-bootstrap/Carousel";

function Watword({ words }) {
  const [showWord, setShowWord] = useState(true);
  setInterval(() => {
    setShowWord(!showWord);
   
  }, 4000);
  return (
    <div className="container" >

      <Carousel variant="dark" controls={false} interval={4000}>
      <Carousel.Item>
      {showWord?<div style={{marginTop: "2rem"}}>
          <h1 className="text-center wathead" style={{marginTop: "5rem"}}>{words[0]}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info' style={{marginTop: "-5rem"}}>Story1</h5>
        </Carousel.Caption>
        </div>:<h2 className='text-center border rounded border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord?<div style={{marginTop: "2rem"}}>
          <h1 className="text-center wathead" style={{marginTop: "5rem"}}>{words[1]}</h1>
        <Carousel.Caption>
          <h5  className='btn btn-info' style={{marginTop: "-5rem"}}>Story2</h5>
        </Carousel.Caption>
        </div>:<h2 className=' text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord?<div style={{marginTop: "2rem"}}>
          <h1 className="text-center wathead" style={{marginTop: "5rem"}}>{words[2]}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info' style={{marginTop: "-5rem"}}>Story3</h5>
        </Carousel.Caption>
        </div>:<h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next picture in 4 minutes</h2>}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Watword;