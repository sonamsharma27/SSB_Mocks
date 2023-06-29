import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import "./SrtResponse.css";

export default function SrtResponse() {
  const [answers, getAnswers] = useState([]);
  const [feedbackAnswers, getFeedbackAnswers] = useState([]);
  const [feedback, setFeedback] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/srt_resp");
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
        "http://localhost:5000/api/srt_resp_by_id",
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="srtmain container">
        {answers.map((d) => {
          let storedRating = 0;
          d.users.forEach((user) => {
            if (user.email === localStorage.getItem("email")) {
              storedRating = user.rating;
            }
          });
          return (
            <div key={d._id} className="srtcontent container">
              <p style={{ color: "black" }}>Email: {d.username}</p>
              <div className="m-0 ">
                <p className="fw-bolder mt-1 mb-1">Situations:</p>
                {d.questions.split("|||").map((item, index) => (
                  <li className={item.length ? "" : "d-none"} key={index}>
                    {item}
                  </li>
                ))}
              </div>
              <p style={{ color: "black" }} className="mb-1 mt-2 fw-bolder ">
                Result:
              </p>
              <p>{d.result}</p>
              <textarea
                name="text"
                id=""
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                cols="120"
                rows="4"
                placeholder="Write Your Feedback Here"
              ></textarea>
              <button
                className="submitres m-2 p-0"
                type="submit"
                onClick={(e) => {
                  postSrtData(d.username, d.result, d.questions);
                }}
              >
                Submit
              </button>
              <br />
              <br />
              <Rating
                onClick={(e) => handleRating(e, d._id)}
                showTooltip={true}
                initialValue={storedRating}
                tooltipArray={["Bad", "Average", "Good", "Great", "Awesome"]}
                style={{ pointerEvents: storedRating > 0 ? "none" : "" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere soluta obcaecati tenetur mollitia aperiam totam praesentium harum dolorem! Neque quasi perspiciatis rem quo voluptate cum quia ducimus, itaque, possimus magni autem incidunt repellat!
