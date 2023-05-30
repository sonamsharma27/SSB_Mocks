import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './gpeFeedback.css'

export default function PpdtFeedback() {

  const [feedback,showFeedback] = useState([])
  const [ppdtfeedback,showPpdtFeedback] = useState('')
  const [responseIndex, setResponseIndex] = useState(-1);
  const getGpeFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/gpefeedbackstore');
    //   console.log(response);
      await showFeedback(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  var flag = true

  const showppdtfeedback = async (feed) =>{
    if (flag) {
      // const updateMessages = [...ppdtfeedback]
      // updateMessages[index] = `Button ${index + 1} clicked!`;
      // showPpdtFeedback(updateMessages)
      
      flag = false
      showPpdtFeedback(feed)
    }
    else{
      
      showPpdtFeedback(null)
      flag = true
      
    }
    
  }

  const handleFeedbackClick = (feedback, index) => {
    setResponseIndex(index)
    showppdtfeedback(feedback);
  }

  useEffect(()=>{
    getGpeFeedback()
  },[])
  return (
    <>
        <div className="showfeedback">
        {
            feedback.map((ans,index)=>(
              <div className="gpefeedback" key={ans._id}>
                  <p style={{color: "black"}}>Story: {ans.problem}</p>
                  <p style={{color: "black"}} className='imageurl'>Picture: <img src={ans.url} alt="images" className='picurl'/></p>
                  <p style={{color: "black"}}>Story: {ans.result}</p>
                  <button onClick={(e)=>handleFeedbackClick(ans.feedback,index)} className='btnfeedback'>Show Feedback</button>
                 {index===responseIndex && <p style={{color: "black"}} className='ppdtbtnfeedback'>{ppdtfeedback}</p>}
              </div>
            ))
        }
        </div>
    </>
  )
}
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non libero sed repellendus alias omnis iste voluptatem dicta consequatur, perferendis aperiam dolor impedit eos eaque eum inventore, voluptates sapiente labore dolore voluptas quis et eveniet!