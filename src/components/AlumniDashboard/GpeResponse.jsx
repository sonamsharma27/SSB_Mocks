import React,{useState,useEffect} from 'react'
import axios from 'axios';

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
      })
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='srtcontent'>
            <p style={{color: "black"}}>Username: {d.username}</p>
            <p style={{color: "black"}}>Result: {d.solution}</p>
            <textarea name="text" id="" cols="120" rows="10" placeholder='Write Your Feedback Here'></textarea>
          </div>
        ))
      }
      </div>
    </>
  )
}
