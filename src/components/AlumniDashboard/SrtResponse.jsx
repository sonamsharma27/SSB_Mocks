import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './SrtResponse.css'


export default function SrtResponse() {
  const [answers,getAnswers] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/srt_resp');
    //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getData()
  })
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='srtcontent'>
            <p style={{color: "black"}}>Username: {d.username}</p>
            <p style={{color: "black"}}>Result: {d.result}</p>
            <textarea name="text" id="" cols="120" rows="10" placeholder='Write Your Feedback Here'></textarea>
          </div>
        ))
      }
      </div>
    </>
  )
}
