import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gpeFeedback.css";

export default function PpdtFeedback() {
  const [feedback, showFeedback] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("past1week");
  const [ppdtfeedback, showPpdtFeedback] = useState("");
  const [responseIndex, setResponseIndex] = useState(-1);
  // const getGpeFeedback = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/gpefeedbackstore');
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
        "http://localhost:5000/api/gpefeedbackstore",
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
    if (responseIndex === index) {
      setResponseIndex(null);
      showppdtfeedback("");
    } else {
      setResponseIndex(index);
      showppdtfeedback(feedback);
    }
  };

  // useEffect(()=>{
  //   getGpeFeedback()
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
        {feedback.map((ans, index) => {
          if (ans.problem.length === 0) return <></>;
          return (
            <div className="gpefeedback" key={ans._id}>
              <div className="gpecon1">
                <div>
                <p className="text-muted" style={{ fontWeight: "bolder" }}>Date of Test: {ans.createAt.slice(0, 10)}</p>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    Gpe Picture:{" "}
                  </p>
                  <p style={{ color: "black" }} className="picurl">
                    <img src={ans.url} alt="" className="picurl" />
                  </p>
                </div>
                <div>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    Aspirant's Result:{" "}
                  </p>
                  <p className="text-muted" style={{ fontWeight: "bolder" }}>
                    {ans.result}
                  </p>
                </div>
                <p style={{ color: "black", fontSize: "20px" }}>
                  Feedback is given by:{" "}
                </p>
                <p style={{ color: "black" }} className="imageurl">
                  Alumni email: {ans.alumniname}
                </p>
                <button
                  onClick={() => handleFeedbackClick(ans.feedback, index)}
                  className="gpebtnfeed"
                >
                  {responseIndex === index ? "Hide Feedback" : "Show Feedback"}
                </button>
                {index === responseIndex && (
                  <p style={{ color: "black" }} className="ppdtbtnfeedback">
                    {ppdtfeedback}
                  </p>
                )}
              </div>
              <div className="gpecon2">
                <p className="text-muted" style={{ fontWeight: "bolder" }}>
                  Aspirant's Problem:{" "}
                </p>
                <p className="response">{ans.problem}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non libero sed repellendus alias omnis iste voluptatem dicta consequatur, perferendis aperiam dolor impedit eos eaque eum inventore, voluptates sapiente labore dolore voluptas quis et eveniet!
