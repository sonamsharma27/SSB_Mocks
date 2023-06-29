import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import "./GpeResponse.css";

export default function GpeResponse() {
  const [answers, getAnswers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [feedback, setFeedback] = useState("");

  // const getGpeData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/gpe_resp");
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

      const response = await axios.get("http://localhost:5000/api/gpe_resp", {
        params: {
          start: pastDate.toISOString(),
          end: currentDate.toISOString()
        }
      });
      console.log(response.data);

      const filteredAnswers = response.data.filter(answer => {
        const createAt = new Date(answer.createAt);
        return createAt >= pastDate && createAt <= currentDate;
      });

      console.log(filteredAnswers);
      getAnswers(filteredAnswers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleRating = async (e, objectid) => {
    console.log(e, objectid, localStorage.getItem("email"));
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/gpe_resp_by_id",
        {
          oid: objectid,
          email: localStorage.getItem("email"),
          rating: e,
        }
      );
      console.log(resp);
      // setCurResponse(resp.data);
      if (resp.data.errmsg) {
        alert(resp.data.errmsg);
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const postGpeFeedback = async (problem, url, result) => {
    axios
      .post("http://localhost:5000/api/gpefeedbackstore", {
        problem: problem,
        url: url,
        result: result,
        feedback: feedback,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("gpe Feedback Saved Successfully...!");
    setFeedback("");
  };

  // useEffect(() => {
  //   getGpeData();
  // }, []);
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="srtmain">
      <div>
        <h2>Select Answer by week</h2>
        <select onChange={handleFilterChange} value={selectedFilter} style={{width: "30%",height: "30px"}}>
          <option value="past1week">past 1 week</option>
          <option value="past2week">past 2 week</option>
          <option value="past3week">past 3 week</option>
          <option value="past4week">past 4 week</option>
        </select>
      </div>
        {answers.map((d) => {
          let storedRating = 0;
          d.users.forEach((user) => {
            if (user.email === localStorage.getItem("email")) {
              storedRating = user.rating;
            }
          });
          return (
            <div key={d._id} className="gpecontent">
              <div className="gpecon1">
                <div>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    Your Email: {d.username}
                  </p>
                </div>

                <div>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    Gpe Picture:{" "}
                  </p>
                  <p style={{ color: "black" }} className="picurl">
                    <img src={d.url} alt="" className="picurl" />
                  </p>
                </div>
                <div>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    Your Result:{" "}
                  </p>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    {d.solution}
                  </p>
                </div>

                <textarea
                  name="text"
                  id=""
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  cols="70"
                  rows="3"
                  placeholder="Write Your Feedback Here"
                ></textarea>
                <button
                  className="submitres"
                  onClick={(e) => {
                    postGpeFeedback(d.problem, d.url, d.solution);
                  }}
                >
                  Submit
                </button>
                <div>
                  <div className="text-muted">
                    Your rating to aspirant's response:
                  </div>
                  <Rating
                    onClick={(e) => handleRating(e, d._id)}
                    showTooltip={true}
                    initialValue={storedRating}
                    tooltipArray={[
                      "Bad",
                      "Average",
                      "Good",
                      "Great",
                      "Awesome",
                    ]}
                    style={{ pointerEvents: storedRating > 0 ? "none" : "" }}
                  />
                </div>
              </div>

              <div className="gpecon2">
                <p className="text-muted" style={{ fontWeight: "bolder" }}>
                  Your Problem:{" "}
                </p>
                <p className="response">Problem: {d.problem}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
