import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import "./GpeResponse.css";

export default function GpeResponse() {
  const [answers, getAnswers] = useState([]);
  const [feedback, setFeedback] = useState("");

  const getGpeData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/gpe_resp");
      //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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

  useEffect(() => {
    getGpeData();
  }, []);
  return (
    <>
      <div className="srtmain">
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
                <Rating
                  onClick={(e) => handleRating(e, d._id)}
                  showTooltip={true}
                  style={{ pointerEvents: storedRating > 0 ? "none" : "" }}
                  initialValue={storedRating}
                  tooltipArray={["Bad", "Average", "Good", "Great", "Awesome"]}
                />
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
