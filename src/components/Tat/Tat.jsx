import React, { useState, useEffect } from "react";
import TatInput from "./TatInput";
import TatImg from "./TatImg";
import { Link } from "react-router-dom";
import axios from "axios";

function Tat() {
  const [storyInput, setStoryInput] = useState({
    s1: "",
    s0: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
  });
  const [timeup, setTimeUp] = useState(false);
  const [imgUrls, setImgUrls] = useState([]);
  const getImgUrls = () => {
    if(imgUrls.length > 0) return;
    fetch("http://localhost:5000/api/tat")
      .then((res) => res.json())
      .then((res) => {
        setImgUrls(res);
      });
  };
  getImgUrls();
  setTimeout(() => {
    setTimeUp(true);
  }, 30000);
  useEffect(() => {axios
    .post("http://localhost:5000/api/tat_resp", {
      username: "Fred",
      url1: imgUrls[0]?.url,
      url2: imgUrls[1]?.url,
      url3: imgUrls[2]?.url,
      url4: imgUrls[3]?.url,
      url5: imgUrls[4]?.url,
      url6: imgUrls[5]?.url,
      url7: imgUrls[6]?.url,
      url8: imgUrls[7]?.url,
      url9: imgUrls[8]?.url,
      url10: imgUrls[9]?.url,
      s1: storyInput.s0,
      s2: storyInput.s1,
      s3: storyInput.s2,
      s4: storyInput.s3,
      s5: storyInput.s4,
      s6: storyInput.s5,
      s7: storyInput.s6,
      s8: storyInput.s7,
      s9: storyInput.s8,
      s10: storyInput.s9,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })},[timeup]);

  return (
    <>
      {timeup ? (
        <div className="ques_submit">
          <h1>Your response has been submitted.</h1>
          <div className="ques_link">
            <Link
              className="ques_dash btn btn-warning border border-5 border-primary"
              to="/dashboard"
            >
              Click here to go to dashboard
            </Link>{" "}
            <br /> <br />
            <Link className="ques_dash btn btn-info" to="/tatintro">
              Try another TAT test
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center">
          <h1 className="text-center p-2 align-self-center bg-success rounded-2">
            Thematic Apperception Test
          </h1>
          {imgUrls.length ? (
            <>
              {" "}
              <TatImg imgUrls={imgUrls} />
              <TatInput
                setStoryInput={setStoryInput}
                storyInput={storyInput}
                urls={imgUrls}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default Tat;
