import React, { useState } from "react";
import './TatImg.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function TatImg({ imgUrls }) {
  const [showImg, setShowImg] = useState(true);
  const [url, setUrl] = useState(imgUrls[0]);
  const [duration, setDuration] = useState(300);
  const [imgNo, setImgNo] = useState(1);
  let idx = 0;
  setInterval(() => {
    setShowImg(true);
    setTimeout(() => {
      setShowImg(false);
      setUrl(imgUrls[++idx]);
      setDuration(300)
    }, 10000);
    setImgNo(1 + imgNo);
  }, 12000);
  return (
   <>
   </>
      
  );
}

export default TatImg;