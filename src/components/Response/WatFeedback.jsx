import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ppdtfeedback.css";

export default function WatFeedback() {
  const [feedback, showFeedback] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [watfeedback, showWatFeedback] = useState("");
  const [responseIndex, setResponseIndex] = useState(-1);

  // const getwatFeedback = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/wat_feedback');
  //   //   console.log(response);
  //     await showFeedback(response.data);
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

      const response = await axios.get(
        "http://localhost:5000/api/wat_feedback",
        {
          params: {
            start: pastDate.toISOString(),
            end: currentDate.toISOString(),
          },
        }
      );
      console.log(response.data);

      const filteredAnswers = response.data.filter((answer) => {
        const createAt = new Date(answer.createAt);
        return createAt >= pastDate && createAt <= currentDate;
      });

      filteredAnswers.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

      console.log(filteredAnswers);
      showFeedback(filteredAnswers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  var flag = true;
  const showwatfeedback = async (feed) => {
    if (flag) {
      // const updateMessages = [...ppdtfeedback]
      // updateMessages[index] = `Button ${index + 1} clicked!`;
      // showPpdtFeedback(updateMessages)

      flag = false;
      showWatFeedback(feed);
    } else {
      showWatFeedback(null);
      flag = true;
    }
  };

  const handleFeedbackClick = (feedback, index) => {
    if (responseIndex === index) {
      setResponseIndex(null);
      showwatfeedback("");
    } else {
      setResponseIndex(index);
      showwatfeedback(feedback);
    }
  };

  // useEffect(()=>{
  //   getwatFeedback()
  // },[])
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="showwatfeedback ">
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
        {feedback.map((ans, index) => (
          <div className="watfeedback container p-3" key={ans._id}>
            <p className="text-muted" style={{ fontWeight: "bolder" }}>Date of Test: {ans.createAt.slice(0, 10)}</p>
            <p className="fw-bolder text-muted">Aspirant's response:</p>
            <div className="response m-2">
              <li>
                <span>{`${ans.word1}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s1}`}</span>
              </li>
              <li>
                <span>{`${ans.word2}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s2}`}</span>
              </li>
              <li>
                <span>{`${ans.word3}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s3}`}</span>
              </li>
              <li>
                <span>{`${ans.word4}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s4}`}</span>
              </li>
              <li>
                <span>{`${ans.word5}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s5}`}</span>
              </li>
              <li>
                <span>{`${ans.word6}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s6}`}</span>
              </li>
              <li>
                <span>{`${ans.word7}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s7}`}</span>
              </li>
              <li>
                <span>{`${ans.word8}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s8}`}</span>
              </li>
              <li>
                <span>{`${ans.word9}`}: &nbsp;</span>
                <span className="fw-bolder words">{`${ans.s9}`}</span>
              </li>
              <li>
                <span>{`${ans.word10}`}:&nbsp;</span>
                <span className="fw-bolder words">{`${ans.s10}`}</span>
              </li>
            </div>

            <p style={{ color: "black", fontSize: "20px" }}>
              Feedback is given by:{" "}
            </p>
            <p style={{ color: "black" }} className="imageurl">
              Alumni email: {ans.alumniname}
            </p>
            <button
              onClick={() => handleFeedbackClick(ans.feedback, index)}
              className="btnfeedback"
            >
              {responseIndex === index ? "Hide Feedback" : "Show Feedback"}
            </button>
            {index === responseIndex && (
              <>
                <p style={{ color: "black" }} className="ppdtbtnfeedback">
                  {watfeedback}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
