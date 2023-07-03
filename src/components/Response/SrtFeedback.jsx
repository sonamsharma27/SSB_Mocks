import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SrtFeedback() {
  const [feedback, showFeedback] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [srtfeedback, showSrtFeedback] = useState("");
  const [responseIndex, setResponseIndex] = useState(-1);
  // const getsrtFeedback = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/srt_feedback');
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
        "http://localhost:5000/api/srt_feedback",
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
  const showsrtfeedback = async (feed) => {
    if (flag) {
      // const updateMessages = [...ppdtfeedback]
      // updateMessages[index] = `Button ${index + 1} clicked!`;
      // showPpdtFeedback(updateMessages)

      flag = false;
      showSrtFeedback(feed);
    } else {
      showSrtFeedback(null);
      flag = true;
    }
  };

  const handleFeedbackClick = (feedback, index) => {
    if (responseIndex === index) {
      showsrtfeedback("");
      setResponseIndex(null);
    } else {
      setResponseIndex(index);
      showsrtfeedback(feedback);
    }
  };

  // useEffect(()=>{
  //   getsrtFeedback()
  // },[])
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="showfeedback">
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
          <div className="ppdtfeedback container border border-1" key={ans._id}>
            <div>
            <p className="text-muted" style={{ fontWeight: "bolder" }}>Date of Test: {ans.createAt.slice(0, 10)}</p>
              <p className="fw-bolder mt-2 mb-0">Situations</p>
              <div className="srtlistdata">
                {ans.situation.split("|||").map((item, index) => (
                  <li
                    key={index}
                    className={item.length ? "srtlistitems" : "d-none"}
                  >
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <p
              style={{ color: "black", fontSize: "20px" }}
              className="mb-0 mt-2"
            >
              Responses:{" "}
            </p>
            <p>{ans.result}</p>
            {/* <p style={{color: "black"}} className='imageurl'>Username: {ans.username}</p> */}
            <p style={{ color: "black", fontSize: "20px" }}>
              Feedback is given by:{" "}
            </p>
            <p style={{ color: "black" }} className="imageurl">
              Alumni email: {ans.alumniname}
            </p>
            {/* {responseIndex === index && <p>{ans.feedback}</p>} */}
            <button
              onClick={() => handleFeedbackClick(ans.feedback, index)}
              className="btnfeedback"
            >
              {responseIndex === index ? "Hide Feedback" : "Show Feedback"}
            </button>

            {index === responseIndex && (
              <>
                <p style={{ color: "black" }} className="ppdtbtnfeedback">
                  {srtfeedback}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
