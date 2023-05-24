import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './GpeResponse.css'

export default function GpeResponse() {
    const [answers,getAnswers] = useState([])

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

      useEffect(()=>{
        getGpeData()
      },[])
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='gpecontent'>
            <p style={{color: "black"}}>Username: {d.username}</p>
            <p style={{color: "black"}} className='gpeurl'>Picture: <img src={d.url} alt=""/></p>
            <p style={{color: "black"}}>Problem: {d.problem}</p>
            <p style={{color: "black"}}>Result: {d.solution}</p>
            <textarea name="text" id="" cols="120" rows="3" placeholder='Write Your Feedback Here'></textarea>
            <button className='submitres'>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}
