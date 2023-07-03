import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

import axios from "axios";
import "./TatResponse.css";

export default function TatResponse() {
  const [answers, getAnswers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [feedback, setFeedback] = useState("");
  // const getTatData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/tat_resp");
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

      const response = await axios.get("http://localhost:5000/api/tat_resp", {
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
        "http://localhost:5000/api/tat_resp_by_id",
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
  // useEffect(() => {
  //   getTatData();
  // }, []);
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="tatmain">
        <div>
          <h2>Filter Responses by Week</h2>
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
            <div key={d._id} className="tatcontent">
              <p className="text-muted" style={{ fontWeight: "bolder" }}>Date of Test: {d.createAt.slice(0, 10)}</p>
              <p className="text-muted" style={{ fontWeight: "bolder" }}>
                Aspirant's Email: {d.username}
              </p>
              <p className="text-muted" style={{ fontWeight: "bolder" }}>
                Aspirant's response:{" "}
              </p>
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
                className="submitattres"
                onClick={(e) => {
                  submittatFeedback(
                    d.username,
                    d.url1,
                    d.url2,
                    d.url3,
                    d.url4,
                    d.url5,
                    d.url6,
                    d.url7,
                    d.url8,
                    d.url9,
                    d.url10,
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
    </>
  );
}
