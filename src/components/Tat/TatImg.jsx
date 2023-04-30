import React, { useState } from "react";
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
    }, 30000);
    setImgNo(1 + imgNo);
  }, 50000);
  return (
    <div>
      <div className="container w-50 mt-3 ps-5">
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