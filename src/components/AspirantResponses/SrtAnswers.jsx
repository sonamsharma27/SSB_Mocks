import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Srtanswers.css";

export default function SrtAnswers() {
  const [answers, getAnswers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [feedbackAnswers, getFeedbackAnswers] = useState([]);
  const [feedback, setFeedback] = useState("");

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/srt_resp");
  //     //   console.log(response);
  //     await getAnswers(response.data);
  //     // console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchdata = async () => {
    try {
      const currentDate = new Date();
      const pastDate = new Date();

      if (selectedFilter === "past1week") {
        pastDate.setDate(pastDate.getDate() - 7);
      } else if (selectedFilter === "past2week") {
        pastDate.setDate(pastDate.getDate() - 14);
      } else if (selectedFilter === "past3week") {
        pastDate.setDate(pastDate.getDate() - 21);
      } else if (selectedFilter === "past4week") {
        pastDate.setDate(pastDate.getDate() - 28);
      }

      const response = await axios.get("http://localhost:5000/api/srt_resp", {
        params: {
          start: pastDate.toISOString(),
          end: currentDate.toISOString(),
        },
      });
      console.log(response.data);

      const filteredAnswers = response.data.filter((answer) => {
        const createAt = new Date(answer.createAt);
        return createAt >= pastDate && createAt <= currentDate;
      });

      filteredAnswers.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

      console.log(filteredAnswers);
      getAnswers(filteredAnswers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const srtData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/srt_feedback"
      );
      console.log(response);
      await getFeedbackAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postSrtData = async (username, result, ques) => {
    axios
      .post("http://localhost:5000/api/srt_feedback", {
        username: username,
        result: result,
        alumniname: localStorage.getItem("email"),
        feedback: feedback,
        situation: ques,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    srtData();
    alert("srt Feedback Saved Successfully...!");
    setFeedback("");
  };

  // useEffect(() => {
  //   getData();
  // }, []);
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="srtmain container">
        <div>
          <h2>Filter Responses by Week</h2>
          <select
            onChange={handleFilterChange}
            value={selectedFilter}
            style={{
              width: "30%",
              height: "30px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <option value="past1week">Previous 1 week</option>
            <option value="past2week">Previous 2 weeks</option>
            <option value="past3week">Previous 3 weeks</option>
            <option value="past4week">Previous 4 weeks</option>
          </select>
        </div>
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
            <div key={d._id} className="srtcontents container">
              <p className="text-muted" style={{ fontWeight: "bolder" }}>Date of Test: {d.createAt.slice(0, 10)}</p>
              <p className="text-muted mt-4" style={{ fontWeight: "bolder" }}>
                Aspirant Email: {d.username}
              </p>
              <div className="m-0 ">
                <p className="fw-bolder mt-1 mb-1">Situations:</p>
                <div className="srtlistdata">
                  {d.questions.split("|||").map((item, index) => (
                    <li
                      className={item.length ? "srtlistitems" : "d-none"}
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </div>
              </div>
              <p style={{ color: "black" }} className="mb-1 mt-2 fw-bolder ">
                Result:
              </p>
              <p>{d.result}</p>
              {d.users.length > 0 && (
                <div className="rating-div mt-3">
                  <div className="fw-bolder p-2 rounded">
                    <h5 className="m-0 py-1 px-0">Response Ratings</h5>
                    <div className="row">
                      <div className={" fs-1 col-4"}>
                        <div className="mainRating d-flex align-content-center">
                          {" "}
                          {avgRating}{" "}
                          <h1 className="mt-4 m-1" style={{ color: "#ffbc0b" }}>
                            ★
                          </h1>
                        </div>
                        <div className="text-muted">
                          Rated by {d.users.length} Alumni
                        </div>
                      </div>
                      <div className="col-6 starsdiv px-4 ">
                        <div className="row">
                          <div className="col-2">
                            5<span style={{ color: "#ffbc0b" }}>★</span>
                          </div>
                          <div className="col-8 d-flex px-0">
                            <progress
                              className="progress-bar mt-1 p-0 bg-light rounded align-self-center"
                              value={fivestar}
                              max={d.users.length}
                              min={0}
                              style={{ color: "blue" }}
                            ></progress>
                          </div>
                          <div className="col-2 px-1"> {fivestar}</div>
                        </div>
                        <div className="row">
                          <div className="col-2">
                            4<span style={{ color: "#ffbc0b" }}>★</span>
                          </div>
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
                          <div className="col-2">
                            3<span style={{ color: "#ffbc0b" }}>★</span>
                          </div>
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
                          <div className="col-2">
                            2<span style={{ color: "#ffbc0b" }}>★</span>
                          </div>
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
                          <div className="col-2">
                            1<span style={{ color: "#ffbc0b" }}>★</span>
                          </div>
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
