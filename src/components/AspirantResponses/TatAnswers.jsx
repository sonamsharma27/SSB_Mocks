import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TatAnswers.css";

export default function TatAnswers() {
  const [answers, getAnswers] = useState([]);
  const [feedback, setFeedback] = useState("");
  const getTatData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tat_resp");
      //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submittatFeedback = (
    username,
    url1,
    url2,
    url3,
    url4,
    url5,
    url6,
    url7,
    url8,
    url9,
    url10,
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
    // console.log(url);
    axios
      .post("http://localhost:5000/api/tat_feedback", {
        feedback: feedback,
        username: username,
        alumniname: localStorage.getItem("email"),
        url1: url1,
        url2: url2,
        url3: url3,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        url8: url8,
        url9: url9,
        url10: url10,
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
    alert("Tat Feedback Saved Successfully...!");
    setFeedback("");
  };
  useEffect(() => {
    getTatData();
  }, []);
  return (
    <>
      <div className="tatmain">
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
            <div key={d._id} className="tatcontents">
              <p className="fw-bolder text-muted">Email: {d.username}</p>
              <p className="fw-bolder text-muted">Your response: </p>
              {/* <br /> */}
              <div className="tatcont">
                <div className="taturl">
                  <div>
                    <img src={d.url1} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">:{d.s1}</div>
                </div>

                <div className="taturl">
                  <div>
                    <img src={d.url2} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s2}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url3} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s3}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url4} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s4}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url5} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s5}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url6} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s6}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url7} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s7}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url8} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s8}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url9} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: . {d.s9}</div>
                </div>
                <div className="taturl">
                  <div>
                    <img src={d.url10} alt="" className="taturlimg" />
                  </div>
                  <div className="tatinp">: {d.s10}</div>
                </div>
              </div>
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
          );
        })}
      </div>
    </>
  );
}
