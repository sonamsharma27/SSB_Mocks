import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Watanswers.css";

export default function WatAnswers() {
  const [answers, getAnswers] = useState([]);
  const [feedback, setFeedback] = useState("");
  const getWatData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/wat_resp");
      //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitWatFeedback = (
    username,
    word1,
    word2,
    word3,
    word4,
    word5,
    word6,
    word7,
    word8,
    word9,
    word10,
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    s10
  ) => {
    // console.log(word);
    axios
      .post("http://localhost:5000/api/wat_feedback", {
        feedback: feedback,
        username: username,
        alumniname: localStorage.getItem("email"),
        word1: word1,
        word2: word2,
        word3: word3,
        word4: word4,
        word5: word5,
        word6: word6,
        word7: word7,
        word8: word8,
        word9: word9,
        word10: word10,
        s1: s1,
        s2: s2,
        s3: s3,
        s4: s4,
        s5: s5,
        s6: s6,
        s7: s7,
        s8: s8,
        s9: s9,
        s10: s10,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("Wat Feedback Saved Successfully...!");
    setFeedback("");
  };
  useEffect(() => {
    getWatData();
  }, []);
  return (
    <>
      <div className="srtmain">
        {answers.map((d) => {
          let onestar = 0;
          let twostar = 0;
          let threestar = 0;
          let fourstar = 0;
          let fivestar = 0;
          d.users.forEach((user) => {
            if (user.rating === 1) {
              onestar++;
            } else if (user.rating === 2) {
              twostar++;
            } else if (user.rating === 3) {
              threestar++;
            } else if (user.rating === 4) {
              fourstar++;
            } else {
              fivestar++;
            }
          });
          let avgRating = 0.0;
          if (d.users.length > 0) {
            avgRating =
              (onestar +
                2 * twostar +
                3 * threestar +
                4 * fourstar +
                5 * fivestar) /
              d.users.length;
          }
          avgRating = avgRating.toFixed(1);
          return (
            <div key={d._id} className="watcontents">
              <p className="text-muted mt-4" style={{ fontWeight: "bolder" }}>Aspirant Email: {d.username}</p>
              <p className="fw-bolder text-muted">Your response:</p>
              <div className="watfeedcont m-2">
                <li>
                  <span>{`${d.word1}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s1}`}</span>
                </li>
                <li>
                  <span>{`${d.word2}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s2}`}</span>
                </li>
                <li>
                  <span>{`${d.word3}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s3}`}</span>
                </li>
                <li>
                  <span>{`${d.word4}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s4}`}</span>
                </li>
                <li>
                  <span>{`${d.word5}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s5}`}</span>
                </li>
                <li>
                  <span>{`${d.word6}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s6}`}</span>
                </li>
                <li>
                  <span>{`${d.word7}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s7}`}</span>
                </li>
                <li>
                  <span>{`${d.word8}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s8}`}</span>
                </li>
                <li>
                  <span>{`${d.word9}`}: &nbsp;</span>
                  <span className="fw-bolder words">{`${d.s9}`}</span>
                </li>
                <li>
                  <span>{`${d.word10}`}:&nbsp;</span>
                  <span className="fw-bolder words">{`${d.s10}`}</span>
                </li>
              </div>
              {d.users.length > 0 && (
                <div className="rating-div mt-3">
                  <div className="fw-bolder p-2 rounded">
                    <h5 className="m-0 py-1 px-0">Response Ratings</h5>
                    <div className="row">
                      <div className={" fs-1 col-4"}>
                        <div className="mainRating d-flex align-content-center">
                          {" "}
                          {avgRating} <h1 className="mt-4 m-1">★</h1>
                        </div>
                        <div className="text-muted">
                          Rated by {d.users.length} Alumni
                        </div>
                      </div>
                      <div className="col-6 starsdiv px-4 ">
                        <div className="row">
                          <div className="col-2">5★</div>
                          <div className="col-8 d-flex px-0">
                            <progress
                              className="progress-bar mt-1 p-0 bg-light rounded align-self-center"
                              value={fivestar}
                              max={d.users.length}
                              style={{ backgroundColor: "#ff0000" }}
                              min={0}
                            ></progress>
                          </div>
                          <div className="col-2 px-1"> {fivestar}</div>
                        </div>
                        <div className="row">
                          <div className="col-2">4★</div>
                          <div className="col-8 d-flex px-0">
                            <progress
                              className="progress-bar mt-1 p-0 bg-light rounded align-self-center"
                              value={fourstar}
                              max={d.users.length}
                              style={{ backgroundColor: "white" }}
                              min={0}
                            ></progress>
                          </div>
                          <div className="col-2 px-1"> {fourstar}</div>
                        </div>
                        <div className="row">
                          <div className="col-2">3★</div>
                          <div className="col-8 d-flex px-0">
                            <progress
                              className="progress-bar mt-1 p-0 bg-light rounded align-self-center"
                              value={threestar}
                              max={d.users.length}
                              style={{ backgroundColor: "white" }}
                              min={0}
                            ></progress>
                          </div>
                          <div className="col-2 px-1"> {threestar}</div>
                        </div>
                        <div className="row">
                          <div className="col-2">2★</div>
                          <div className="col-8 d-flex px-0">
                            <progress
                              className="progress-bar mt-1 p-0 bg-light rounded align-self-center"
                              value={twostar}
                              max={d.users.length}
                              style={{ backgroundColor: "white" }}
                              min={0}
                            ></progress>
                          </div>
                          <div className="col-2 px-1"> {twostar}</div>
                        </div>
                        <div className="row">
                          <div className="col-2">1★</div>
                          <div className="col-8 d-flex px-0">
                            <progress
                              className="progress-bar mt-1 p-0 bg-light rounded align-self-center"
                              value={onestar}
                              max={d.users.length}
                              style={{ backgroundColor: "white" }}
                              min={0}
                            ></progress>
                          </div>
                          <div className="col-2 px-1"> {onestar}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
