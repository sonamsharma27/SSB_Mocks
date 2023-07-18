import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import "./PpdtResponse.css";

export default function PpdtResponse() {
  const [answers, getAnswers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [feedback, setFeedback] = useState("");
  // const getPpdtData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/ppdt_resp");
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

      const response = await axios.get("http://localhost:5000/api/ppdt_resp", {
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

  const handleRating = async (e, objectid) => {
    console.log(e, objectid, localStorage.getItem("email"));
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/ppdt_resp_by_id",
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

  const postPpdtFeedback = async (story, url) => {
    axios
      .post("http://localhost:5000/api/ppdtfeedbackstore", {
        story: story,
        url: url,
        feedback: feedback,
        alumniname: localStorage.getItem("email"),
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("ppdt Feedback Saved Successfully...!");
    setFeedback("");
  };

  // useEffect(() => {
  //   getPpdtData();
  // }, []);
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="srtmain">
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
            <div key={d._id} className="ppdtfeedcontent">
              <div className="ppdtcon1">
                <div>
                <p className="text-muted" style={{ fontWeight: "bolder" }}>Date of Test: {d.createAt.slice(0, 10)}</p>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    Aspirant's Email: {d.username}
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
                    postPpdtFeedback(d.story, d.url);
                  }}
                >
                  Submit
                </button>
              </div>
              <div className="ppdtcon2">
                <p className="text-muted" style={{ fontWeight: "bolder" }}>
                  Your Story:{" "}
                </p>
                <p className="response">Story: {d.story}</p>
              </div>
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
