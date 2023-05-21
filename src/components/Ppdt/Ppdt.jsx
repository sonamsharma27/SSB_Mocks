import "./Ppdt.css";
import { React, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PpdtQues from "./PpdtQues";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Ppdt() {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if(url!=='') return;
    fetch("http://localhost:5000/api/ppdt")
      .then((res) => res.json())
      .then((res) => setUrl(res.url));
    setTimeout(() => {
      setShowImage(false);
    }, 5000);
});

  return (
    <div className="container d-flex flex-column align-items-center bg-grey ">
      <div>
        <h1 className="ppdt text-center">
          Picture Perception Description Test(PPDT)
        </h1>
      </div>
      <div className="container  shadow-lg p-3 mb-5 bg-body rounded">
        {showImage ? (
          <div className="row ">
            <div className="col-7">
              <img
                src={url}
                alt="PPDT"
                className="ppdt-img border-2 border-dark"
              />
            </div>
            <div className="mx-5 timer_div timer  col-3">
              <CountdownCircleTimer
                isPlaying
                duration={30}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[23, 15, 8, 0]}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </div>
          </div>
        ) : (
          <div>
           
             <PpdtQues url={url} showImage={showImage}/>
              {/* <Route path="/ppdt_ques" element={} /> */}
            
          </div>
        )}
      </div>
    </div>
  );
}
