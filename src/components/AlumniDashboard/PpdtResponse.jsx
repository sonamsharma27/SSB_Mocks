import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './PpdtResponse.css'

export default function PpdtResponse() {
  const [answers,getAnswers] = useState([])
  const getPpdtData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/ppdt_resp');
    //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getPpdtData()
  })
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='srtcontent'>
            <p style={{color: "black"}}>Username: {d.username}</p>
            <p style={{color: "black"}} className='imageurl'>Picture: <img src={d.url} alt="" className='picurl'/></p>
            <p style={{color: "black"}} className='imageurl'>Story: {d.story}</p>
            {/* <p style={{color: "black"}}>Result: {d.result}</p> */}
            <textarea name="text" id="" cols="120" rows="3" placeholder='Write Your Feedback Here'></textarea>

            <button className='submitres'>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}
