import React,{useState,useEffect} from 'react'
import axios from 'axios';


export default function SrtResponse() {
  const [answers,getAnswers] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/srt_resp');
    //   console.log(response);
      await getAnswers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getData()
  })
  return (
    <>
<div>
          {
        answers.map((d) => (
          <ul key={d._id} className="sitlist">
            <li style={{color: "black"}} className="sititems">{d.username}</li>
          </ul>
        ))
      }
      </div>
    </>
  )
}
