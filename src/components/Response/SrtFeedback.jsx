<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function SrtFeedback() {
  const [feedback,showFeedback] = useState([])
  const [srtfeedback,showSrtFeedback] = useState('')
  const [responseIndex, setResponseIndex] = useState(-1);
  const getsrtFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/srt_feedback');
    //   console.log(response);
      await showFeedback(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  var flag = true
  const showsrtfeedback = async (feed) =>{
    if (flag) {
      // const updateMessages = [...ppdtfeedback]
      // updateMessages[index] = `Button ${index + 1} clicked!`;
      // showPpdtFeedback(updateMessages)
      
      flag = false
      showSrtFeedback(feed)
    }
    else{
      
      showSrtFeedback(null)
      flag = true
      
    }
    
  }

  const handleFeedbackClick = (feedback, index) => {
    setResponseIndex(index)
    showsrtfeedback(feedback);
  }

  useEffect(()=>{
    getsrtFeedback()
  },[])
  return (
    <>

<div className="showfeedback">
        {
            feedback.map((ans,index)=>(
              <div className="ppdtfeedback container border border-1" key={ans._id}>
                 <div>
                  <p className='fw-bolder mt-2 mb-0'>Situations</p>
                  {ans.situation.split("|||").map((item,index)=><li key={index} className={item.length?"":"d-none"}>{item}</li>)}
                 </div>
                  <p style={{color: "black"}} className='mb-0 mt-2'>Responses: </p>
                  <p>{ans.result}</p>
                  <p style={{color: "black"}} className='imageurl'>Username: {ans.username}</p>
                  <button onClick={(e)=>handleFeedbackClick(ans.feedback,index)} className='btnfeedback'>Show Feedback</button>
                  
                 {index===responseIndex && <><p style={{color: "black"}} className='ppdtbtnfeedback'>{srtfeedback}</p>
                  <p style={{color: "black"}} className='imageurl'>Alumni email: {ans.alumniname}</p></>}

                
              </div>
            ))
        }
        </div>
    </>
  )
}
=======
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function SrtFeedback() {
  const [feedback,showFeedback] = useState([])
  const [srtfeedback,showSrtFeedback] = useState('')
  const [responseIndex, setResponseIndex] = useState(-1);
  const getsrtFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/srt_feedback');
    //   console.log(response);
      await showFeedback(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  var flag = true
  const showsrtfeedback = async (feed) =>{
    if (flag) {
      // const updateMessages = [...ppdtfeedback]
      // updateMessages[index] = `Button ${index + 1} clicked!`;
      // showPpdtFeedback(updateMessages)
      
      flag = false
      showSrtFeedback(feed)
    }
    else{
      
      showSrtFeedback(null)
      flag = true
      
    }
    
  }

  const handleFeedbackClick = (feedback, index) => {
    setResponseIndex(index)
    showsrtfeedback(feedback);
  }

  useEffect(()=>{
    getsrtFeedback()
  },[])
  return (
    <>

<div className="showfeedback">
        {
            feedback.map((ans,index)=>(
              <div className="ppdtfeedback container border border-1" key={ans._id}>
                 <div>
                  <p className='fw-bolder mt-2 mb-0'>Situations</p>
                  {ans.situation.split("|||").map((item,index)=><li key={index} className={item.length?"":"d-none"}>{item}</li>)}
                 </div>
                  <p style={{color: "black"}} className='mb-0 mt-2'>Responses: </p>
                  <p>{ans.result}</p>
                  <p style={{color: "black"}} className='imageurl'>Username: {ans.username}</p>
                  <button onClick={(e)=>handleFeedbackClick(ans.feedback,index)} className='btnfeedback'>Show Feedback</button>
                  
                 {index===responseIndex && <><p style={{color: "black"}} className='ppdtbtnfeedback'>{srtfeedback}</p>
                  <p style={{color: "black"}} className='imageurl'>Alumni email: {ans.alumniname}</p></>}

                
              </div>
            ))
        }
        </div>
    </>
  )
}
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
