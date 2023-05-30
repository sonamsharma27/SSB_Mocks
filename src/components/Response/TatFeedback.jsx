import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ppdtfeedback.css'

export default function TatFeedback() {
  const [feedback,showFeedback] = useState([])
  const [tatfeedback,showTatFeedback] = useState('')
  const [responseIndex, setResponseIndex] = useState(-1);

  const gettatFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tat_feedback');
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
      showTatFeedback(feed)
    }
    else{
      
      showTatFeedback(null)
      flag = true
      
    }
    
  }

  const handleFeedbackClick = (feedback, index) => {
    setResponseIndex(index)
    showwatfeedback(feedback);
  }

  useEffect(()=>{
    gettatFeedback()
  },[])
  return (
    <>
    <div className="showtatfeedback">
            {
                feedback.map((ans,index)=>(
                  <div className="tatfeedback" key={ans._id}>
                      <p style={{color: "black"}}>urlInput: </p>
                <div className='tatfeedurl'>Picture1: <img src={ans.url1} alt="" /></div>
            <div className='tatfeedurl'>Picture2: <img src={ans.url2} alt="" /></div>
            <div className='tatfeedurl'>Picture3: <img src={ans.url3} alt="" /></div>
            <div className='tatfeedurl'>Picture4: <img src={ans.url4} alt="" /></div>
            <div className='tatfeedurl'>Picture5: <img src={ans.url5} alt="" /></div>
            <div className='tatfeedurl'>Picture6: <img src={ans.url6} alt="" /></div>
            <div className='tatfeedurl'>Picture7: <img src={ans.url7} alt="" /></div>
            <div className='tatfeedurl'>Picture8: <img src={ans.url8} alt="" /></div>
            <div className='tatfeedurl'>Picture9: <img src={ans.url9} alt="" /></div>
            <div className='tatfeedurl'>Picture10: <img src={ans.url10} alt="" /></div>
                      <p style={{color: "black"}}>urlAnswer: </p>
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
                      
                     {index===responseIndex && <p style={{color: "black"}} className='ppdtbtnfeedback'>{tatfeedback}</p>}
    
                     <p style={{color: "black"}} className='imageurl'>Feedback is given by: {ans.alumniname}</p>
                  </div>
                ))
            }
            </div>
        </>
  )
}
