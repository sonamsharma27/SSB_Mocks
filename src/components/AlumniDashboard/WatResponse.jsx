import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import "./WatResponse.css";

export default function WatResponse() {
  const [answers, getAnswers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [answers1, getAnswers1] = useState([]);
  const [answers2, getAnswers2] = useState([]);
  const [answers3, getAnswers3] = useState([]);
  const [feedback, setFeedback] = useState("");
  // const[date,setDate] = useState([
  //   "week1": [],

  // ])
  // const getWatData = async () => {
  //   try {
  //     const currentDate = new Date();
  //     const pastDate = new Date();
  //     pastDate.setDate(pastDate.getDate() - 7)
  //     const response = await axios.get("http://localhost:5000/api/wat_resp", {
  //       params: {
  //         start: pastDate.toISOString(),
  //         end: currentDate.toISOString()
  //       }
  //     });
  //     console.log("Response: ",response.data);
  //     const filteredAnswers = response.data.filter(answer => {
  //       const createAt = new Date(answer.createAt);
  //       return createAt >= pastDate && createAt <= currentDate;
  //     });
  //     console.log("Filtered: ",filteredAnswers);
  //     //   console.log(response);
  //     await getAnswers(filteredAnswers);
  //     // console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleRating = async (e, objectid) => {
    console.log(e, objectid, localStorage.getItem("email"));
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/wat_resp_by_id",
        {
          oid: objectid,
          email: localStorage.getItem("email"),
          rating: e,
        }
      );
      if (resp.data.errmsg) {
        alert(resp.data.errmsg);
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

      const response = await axios.get("http://localhost:5000/api/wat_resp", {
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
      <div>
      {answers.map((d) => {
          let storedRating = 0;
          d.users.forEach((user) => {
            if (user.email === localStorage.getItem("email")) {
              storedRating = user.rating;
            }
          });
          return (
            <div key={d._id} className="watcontent">
              <p className="text-muted" style={{ fontWeight: "bolder" }}>Aspirant's Email: {d.username}</p>
              <p className="text-muted" style={{ fontWeight: "bolder" }}>Aspirant's response:</p>
              {/* <br /> */}
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
              <textarea
                name="text"
                id=""
                cols="120"
                rows="3"
                placeholder="Write Your Feedback Here"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <button
                className="submitrewats"
                onClick={(e) => {
                  submitWatFeedback(
                    d.username,
                    d.word1,
                    d.word2,
                    d.word3,
                    d.word4,
                    d.word5,
                    d.word6,
                    d.word7,
                    d.word8,
                    d.word9,
                    d.word10,
                    d.s1,
                    d.s2,
                    d.s3,
                    d.s4,
                    d.s5,
                    d.s6,
                    d.s7,
                    d.s8,
                    d.s9,
                    d.s10
                  );
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
                  tooltipArray={["Bad", "Average", "Good", "Great", "Awesome"]}
                  style={{ pointerEvents: storedRating > 0 ? "none" : "" }}
                />
              </div>
            </div>
          );
        })}
      </div>
      

      </div>
    </>
  );
}
