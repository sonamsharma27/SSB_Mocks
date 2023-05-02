import React, { useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function TatImg({ imgUrls }) {
  const [showImg, setShowImg] = useState(true);
  const [url, setUrl] = useState(imgUrls[1]);
  const [imgNo, setImgNo] = useState(1);
  let idx = 0;
  setInterval(() => {
    setShowImg(true);
    setTimeout(() => {
      setShowImg(false);
      setUrl(imgUrls[++idx]);
    }, 10000);
    setImgNo(1 + imgNo);
  }, 12000);
  return (
    <div>
      <div className="container w-50 mt-3 ps-5">
        <CountdownCircleTimer
      isPlaying
      className='dark'
      duration={10}
      colors={[
        // ['red', 4],
        // ['blue',3],
        'green','red',
      ]}
      >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
        <h3 className="text-center text-muted">Picture: {imgNo}</h3>
        {showImg ? (
          <img className="ps-5 ms-5" src={url} />
        ) : (
          <div
            height="500"
            width="100"
            className=" bg-dark text-white text-center"
          >
            Counter
          </div>
        )}
      </div>
    </div>
  );
}

export default TatImg;