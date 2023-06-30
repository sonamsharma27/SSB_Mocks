import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import "./SrtResponse.css";

export default function SrtResponse() {
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
          <h2>Filter responses by week</h2>
          <select
            onChange={handleFilterChange}
            value={selectedFilter}
            style={{ width: "30%", height: "30px" }}
          >
            <option value="past1week">Previous 1 week</option>
            <option value="past2week">Previous 2 weeks</option>
            <option value="past3week">Previous 3 weeks</option>
            <option value="past4week">Previous 4 weeks</option>
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
            <div key={d._id} className="srtcontent container">
              <p style={{ color: "black" }}>Aspirant's Email: {d.username}</p>
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
              <div>
                <div className="text-muted">
                  Your rating to aspirant's response:
                </div>
                <Rating
                  onClick={(e) => handleRating(e, d._id)}
                  showTooltip={true}
                  initialValue={storedRating}
                  tooltipArray={["Bad", "Average", "Good", "Great", "Awesome"]}
                  style={{ pointerEvents: storedRating > 0 ? "none" : "" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere soluta obcaecati tenetur mollitia aperiam totam praesentium harum dolorem! Neque quasi perspiciatis rem quo voluptate cum quia ducimus, itaque, possimus magni autem incidunt repellat!
