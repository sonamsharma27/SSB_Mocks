import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ppdtfeedback.css";

export default function TatFeedback() {
  const [feedback, showFeedback] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [tatfeedback, showTatFeedback] = useState("");
  const [responseIndex, setResponseIndex] = useState(-1);

  // const gettatFeedback = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/tat_feedback');
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
        "http://localhost:5000/api/tat_feedback",
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
      showTatFeedback(feed);
    } else {
      showTatFeedback(null);
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
  //   gettatFeedback()
  // },[])
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="showtatfeedback ">
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
          <div className="tatfeedback container" key={ans._id}>
            <p className="fw-bolder text-muted">Username: {ans.username}</p>
            <p className="fw-bolder text-muted">Aspirant's response: </p>
            <div className="tatcont">
              <div className="taturl">
                <div>
                  <img src={ans.url1} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">:{ans.s1}</div>
              </div>

              <div className="taturl">
                <div>
                  <img src={ans.url2} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s2}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url3} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s3}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url4} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s4}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url5} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s5}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url6} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s6}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url7} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s7}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url8} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s8}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url9} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: . {ans.s9}</div>
              </div>
              <div className="taturl">
                <div>
                  <img src={ans.url10} alt="" className="taturlimg" />
                </div>
                <div className="tatinp">: {ans.s10}</div>
              </div>
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
                {" "}
                <p style={{ color: "black" }} className="ppdtbtnfeedback">
                  {tatfeedback}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
