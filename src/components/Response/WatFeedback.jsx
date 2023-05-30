import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ppdtfeedback.css'

export default function WatFeedback() {
  const [feedback,showFeedback] = useState([])
  const [watfeedback,showWatFeedback] = useState('')
  const [responseIndex, setResponseIndex] = useState(-1);

  const getwatFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/wat_feedback');
    //   console.log(response);
      await showFeedback(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  var flag = true
  const showwatfeedback = async (feed) =>{
    if (flag) {
      // const updateMessages = [...ppdtfeedback]
      // updateMessages[index] = `Button ${index + 1} clicked!`;
      // showPpdtFeedback(updateMessages)
      
      flag = false
      showWatFeedback(feed)
    }
    else{
      
      showWatFeedback(null)
      flag = true
      
    }
    
  }

  const handleFeedbackClick = (feedback, index) => {
    setResponseIndex(index)
    showwatfeedback(feedback);
  }

  useEffect(()=>{
    getwatFeedback()
  },[])
  return (
    <>
<div className="showwatfeedback">
        {
            feedback.map((ans,index)=>(
              <div className="watfeedback" key={ans._id}>
                  <p style={{color: "black"}}>WordInput: </p>
                  <div>{`word1: ${ans.word1}`}</div>
            <div>{`word2: ${ans.word2}`}</div>
            <div>{`word3: ${ans.word3}`}</div>
            <div>{`word4: ${ans.word4}`}</div>
            <div>{`word5: ${ans.word5}`}</div>
            <div>{`word6: ${ans.word6}`}</div>
            <div>{`word7: ${ans.word7}`}</div>
            <div>{`word8: ${ans.word8}`}</div>
            <div>{`word9: ${ans.word9}`}</div>
            <div>{`word10: ${ans.word10}`}</div>
                  <p style={{color: "black"}}>WordAnswer: </p>
                  <div>{`s1: ${ans.s1}`}</div>
            <div>{`s2: ${ans.s2}`}</div>
            <div>{`s3: ${ans.s3}`}</div>
            <div>{`s4: ${ans.s4}`}</div>
            <div>{`s5: ${ans.s5}`}</div>
            <div>{`s6: ${ans.s6}`}</div>
            <div>{`s7: ${ans.s7}`}</div>
            <div>{`s8: ${ans.s8}`}</div>
            <div>{`s9: ${ans.s9}`}</div>
            <div>{`s10: ${ans.s10}`}</div>
                  <p style={{color: "black"}} className='imageurl'>Username: {ans.username}</p>
                  <button onClick={(e)=>handleFeedbackClick(ans.feedback,index)} className='btnfeedback'>Show Feedback</button>
                  
                 {index===responseIndex && <p style={{color: "black"}} className='ppdtbtnfeedback'>{watfeedback}</p>}

                 <p style={{color: "black"}} className='imageurl'>Feedback is given by: {ans.alumniname}</p>
              </div>
            ))
        }
        </div>
    </>
  )
}
