import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Ppdtanswers.css";
import StarLogo from "../images/StarLogo.js";
export default function PpdtAnswers() {
  const [answers, getAnswers] = useState([]);
  const [feedback, setFeedback] = useState("");
  const getPpdtData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/ppdt_resp");
      //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPpdtData();
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
          console.log(d.users);
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
            <div>
              {/* <div className="mt-3">
                <button
                  className={`cursor-pointer badge ${
                    avgRating >= 4
                      ? "btn-success"
                      : avgRating >= 3
                      ? "btn-warning"
                      : "btn-danger"
                  } me-0`}
                >
                  {avgRating} &nbsp; ★
                </button>
              </div> */}
              <div key={d._id} className="ppdtfeedcontents">
                <div className="ppdtcon1">
                  <div>
                    <p
                      className="text-muted mt-4"
                      style={{ fontWeight: "bolder" }}
                    >
                      Your Email: {d.username}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted" style={{ fontWeight: "bolder" }}>
                      Ppdt Picture:{" "}
                    </p>
                    <p style={{ color: "black" }} className="picurl">
                      <img src={d.url} alt="" className="picurl" />
                    </p>
                  </div>
                </div>
                <div className="ppdtcon2">
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    Your Story:{" "}
                  </p>
                  <p className="response">Story: {d.story}</p>
                </div>
                {/* ★ */}
                {d.users.length > 0 && (
                  <div className="rating-div mt-3">
                    <div className="fw-bolder bg-light p-2 rounded">
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
            </div>
          );
        })}
      </div>
    </>
  );
}
