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
    <div className="showtatfeedback ">
            {
                feedback.map((ans,index)=>(
                  <div className="tatfeedback container" key={ans._id}>
                      <p style={{color: "black"}}>Your response: </p>
            <div className='row'>
              <div className="col-5"><img src={ans.url1} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s1}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url2} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s2}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url3} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s3}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url4} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s4}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url5} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s5}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url6} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s6}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url7} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s7}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url8} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s8}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url9} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s9}</div></div>
            <div className='row'>
              <div className="col-5"><img src={ans.url10} alt="" classname="picurl" /></div>
              <div className="col-7">{ans.s10}</div></div>
                     
                      <p style={{color: "black"}} className='imageurl'>Username: {ans.username}</p>
                      <button onClick={(e)=>handleFeedbackClick(ans.feedback,index)} className='btnfeedback'>Show Feedback</button>
                      
                     {index===responseIndex && <> <p style={{color: "black"}} className='ppdtbtnfeedback'>{tatfeedback}</p>
    
                     <p style={{color: "black"}} className='imageurl'>Feedback is given by: {ans.alumniname}</p></>}
                  </div>
                ))
            }
            </div>
        </>
  )
}
