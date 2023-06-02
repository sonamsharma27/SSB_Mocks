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
<div className="showwatfeedback ">
        {
            feedback.map((ans,index)=>(
              <div className="watfeedback container p-3" key={ans._id}>
                <p className='fw-bolder text-muted'>Your response:</p>
                <div className="response m-2"> 
            <li><span >{`${ans.word1}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s1}`}</span></li>
            <li><span >{`${ans.word2}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s2}`}</span></li>
            <li><span >{`${ans.word3}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s3}`}</span></li>
            <li><span >{`${ans.word4}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s4}`}</span></li>
            <li><span >{`${ans.word5}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s5}`}</span></li>
            <li><span >{`${ans.word6}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s6}`}</span></li>
            <li><span >{`${ans.word7}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s7}`}</span></li>
            <li><span >{`${ans.word8}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s8}`}</span></li>
            <li><span >{`${ans.word9}`}: &nbsp;</span><span className='fw-bolder words'>{`${ans.s9}`}</span></li>
            <li><span >{`${ans.word10}`}:&nbsp;</span><span className='fw-bolder words'>{`${ans.s10}`}</span></li>
                </div>
            
                  <p style={{color: "black"}} className='imageurl my-2'>Username: {ans.username}</p>
                  <button onClick={(e)=>handleFeedbackClick(ans.feedback,index)} className='btnfeedback'>See Feedback</button>
                  
                 {index===responseIndex && <p style={{color: "black"}} className='ppdtbtnfeedback'>{watfeedback}</p>}

                 {/* <p style={{color: "black"}} className='imageurl'>Feedback is given by: {ans.alumniname}</p> */}
              </div>
            ))
        }
        </div>
    </>
  )
}
