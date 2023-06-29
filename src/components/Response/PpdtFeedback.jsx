import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ppdtfeedback.css";

export default function PpdtFeedback() {
  const [feedback,showFeedback] = useState([])
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [ppdtfeedback, showPpdtFeedback] = useState("");
  const [responseIndex, setResponseIndex] = useState(-1);
  // const getPpdtFeedback = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5000/api/ppdtfeedbackstore"
  //     );
  //     //   console.log(response);
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

      const response = await axios.get("http://localhost:5000/api/ppdtfeedbackstore", {
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
      showFeedback(filteredAnswers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };
  
  var flag = true;

  const showppdtfeedback = async (feed) => {
    if (flag) {
      // const updateMessages = [...ppdtfeedback]
      // updateMessages[index] = `Button ${index + 1} clicked!`;
      // showPpdtFeedback(updateMessages)

      flag = false;
      showPpdtFeedback(feed);
    } else {
      showPpdtFeedback(null);
      flag = true;
    }
  };

  const handleFeedbackClick = (feedback, index) => {
    setResponseIndex(index);
    showppdtfeedback(feedback);
    if (responseIndex === index) {
      setResponseIndex(null);
    showppdtfeedback("");
    } else {
      setResponseIndex(index);
    showppdtfeedback(feedback);
    }
  };

  // useEffect(() => {
  //   getPpdtFeedback();
  // }, []);
  useEffect(() => {
    fetchdata();
  }, [selectedFilter]);
  return (
    <>
      <div className="showfeedback">
      <div>
        <h2>Filter Response by Week</h2>
        <select onChange={handleFilterChange} value={selectedFilter} style={{width: "30%",height: "30px",borderRadius: "6px",cursor: "pointer"}}>
          <option value="past1week">Previous 1 week</option>
          <option value="past2week">Previous 2 week</option>
          <option value="past3week">Previous 3 week</option>
          <option value="past4week">Previous 4 week</option>
        </select>
      </div>
        {feedback.map((ans, index) => (
          <div className="ppdtfeedback container rounded p-5" key={ans._id}>
            <div className="row">
              <div className="col-5 ">
                <p className="imageurl p-3 text-muted">
                  Ppdt picture:{" "}
                </p>
                <img src={ans.url} alt="images" className="picurl" />
              </div>
              <div className="col-7 p-3">
                <p  className="feedbackcont text-muted">
                  Your story :{" "}
                </p>
                <p className="response">{ans.story}</p>
              </div>
            </div>
            <p style={{color: "black",fontSize: "20px"}}>Feedback is given by: </p>
            <p style={{color: "black"}} className='imageurl'>Alumni email: {ans.alumniname}</p>
            <button onClick={() => handleFeedbackClick(ans.feedback, index)} className='btnfeedback'>
                    {responseIndex === index ? "Hide Feedback" : "Show Feedback"}
                  </button>
            {index === responseIndex && (
              <p style={{ color: "black" }} className="ppdtbtnfeedback">
                {ppdtfeedback}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non libero sed repellendus alias omnis iste voluptatem dicta consequatur, perferendis aperiam dolor impedit eos eaque eum inventore, voluptates sapiente labore dolore voluptas quis et eveniet!
