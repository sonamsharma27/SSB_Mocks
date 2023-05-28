import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ppdtfeedback.css'

export default function PpdtFeedback() {

  const [feedback,showFeedback] = useState([])
  const [ppdtfeedback,showPpdtFeedback] = useState('')

  const getPpdtFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/ppdtfeedbackstore');
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

  useEffect(()=>{
    getPpdtFeedback()
  },[])
  return (
    <>
        <div className="showfeedback">
        {
            feedback.map((ans)=>(
              <div className="ppdtfeedback" key={ans._id}>
                  <p style={{color: "black"}}>Story: {ans.story}</p>
                  <p style={{color: "black"}} className='imageurl'>Picture: <img src={ans.url} alt="images" className='picurl'/></p>
                  <button onClick={(e)=>{showppdtfeedback(ans.feedback)}}>Show Feedback</button>
                  <p style={{color: "black"}} className='ppdtbtnfeedback'>{ppdtfeedback}</p>
              </div>
            ))
        }
        </div>
    </>
  )
}
