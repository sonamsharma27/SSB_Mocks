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
                    <p className='fw-bolder text-muted'>Username: {ans.username}</p>
                      <p className='fw-bolder text-muted'>Your response: </p>
                      <div className='tatcont'>
            <div className='taturl'>
              <div>
              <img src={ans.url1} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:{ans.s1}</div>
              </div>

              <div className='taturl'>
              <div>
              <img src={ans.url2} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:   {ans.s2}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url3} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:   {ans.s3}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url4} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:   {ans.s4}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url5} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:    {ans.s5}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url6} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:    {ans.s6}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url7} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:     {ans.s7}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url8} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:      {ans.s8}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url9} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>: .   {ans.s9}</div>
              </div>
              <div className='taturl'>
              <div>
              <img src={ans.url10} alt="" className='taturlimg'/>
              </div>
              <div className='tatinp'>:     {ans.s10}</div>
              </div>
            </div>
                     
                      
                      <button onClick={(e)=>handleFeedbackClick(ans.feedback,index)} className='btnfeedback'>Show Feedback</button>
                      
                     {index===responseIndex && <p style={{color: "black"}} className='ppdtbtnfeedback'>{tatfeedback}</p>}
    
                     <p className='fw-bolder text-muted'>Feedback is given by: {ans.alumniname}</p>
                  </div>
                ))
            }
            </div>
        </>
  )
}
