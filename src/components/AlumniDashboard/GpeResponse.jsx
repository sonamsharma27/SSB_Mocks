import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './GpeResponse.css'

export default function GpeResponse() {
    const [answers,getAnswers] = useState([])
    const [feedback,setFeedback] = useState('')

    const getGpeData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/gpe_resp');
        //   console.log(response);
          await getAnswers(response.data);
          // console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      const postGpeFeedback = async (problem,url,result) => {
        axios.post('http://localhost:5000/api/gpefeedbackstore', {
          problem: problem,
          url: url,
          result: result,
          feedback: feedback
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          alert('gpe Feedback Saved Successfully...!')
          setFeedback('')
      }

      useEffect(()=>{
        getGpeData()
      },[])
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='gpecontent'>
            <p style={{color: "black"}}>Email: {d.username}</p>
            <p style={{color: "black"}} className='gpeurl'>Picture: <img src={d.url} alt=""/></p>
            <p style={{color: "black"}}>Problem: {d.problem}</p>
            <p style={{color: "black"}}>Result: {d.solution}</p>
            <textarea name="text" id="" value={feedback} onChange={(e) => setFeedback(e.target.value)} cols="120" rows="3" placeholder='Write Your Feedback Here'></textarea>
            <button className='submitres' onClick={(e)=>{postGpeFeedback(d.problem,d.url,d.solution)}}>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}
