import React, { useState } from "react";
import "./WatWord.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel  from "react-bootstrap/Carousel";

function Watword({ words }) {
  const [showWord, setShowWord] = useState(true);
  return (
    <div className="container" >
      <Carousel variant="dark" controls={false} interval={3000} indicators={false}>
      <Carousel.Item>
      {showWord && words.length>0 ?<div>
          {/* <img src={words[0]?.word} alt="Word1" /> */}
          <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[0]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word1</h5>
        </Carousel.Caption>
        </div>:<h2 className='text-center border rounded border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[1]?.word}</h1>
        <Carousel.Caption>
          <h5  className='btn btn-info '>Word2</h5>
        </Carousel.Caption>
        </div>:<h2 className=' text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[2]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word3</h5>
        </Carousel.Caption>
        </div>:<div>
        {/* <img className="ant-image-img" alt="bg-img" src="https://media.geeksforgeeks.org/auth-dashboard-uploads/dev1.png" style={{"height": "180px", "border-radius": "15px"}}/> */}
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[3]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word4</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[4]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word5</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[5]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word6</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[6]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word7</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[7]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word8</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[8]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word9</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      <Carousel.Item>
      {showWord && words ?<div>
        <h1 className="text-center wathead" style={{marginTop: "0rem", padding : "6rem"}}>{words[9]?.word}</h1>
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word10</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item>
      {/* <Carousel.Item>
      {showWord && words ?<div>
          <img src='https://www.macmillandictionary.com/external/slideshow/full/White_full.png' alt="Word1" />
        <Carousel.Caption>
          <h5 className='btn btn-info'>Word11</h5>
        </Carousel.Caption>
        </div>:<div>
          <h2 className='text-center border rounded-3 border-secondary mb-3 border-5 p-5'>Next word in 4 minutes</h2></div>}
      </Carousel.Item> */}
    </Carousel>
    </div>
  );
}

export default Watword;