import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function WatResponse() {
  const [answers,getAnswers] = useState([])
  const getWatData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/wat_resp');
    //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    setTimeout(() => {
      getWatData()
    });
    
  })
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='srtcontent'>
            <p style={{color: "black"}}>Username: {d.username}</p>
            <p style={{color: "black"}}>Words: 
            </p>
            {/* <br /> */}
            <div>{`word1: ${d.word1}`}</div>
            <div>{`word2: ${d.word2}`}</div>
            <div>{`word3: ${d.word3}`}</div>
            <div>{`word4: ${d.word4}`}</div>
            <div>{`word5: ${d.word5}`}</div>
            <div>{`word6: ${d.word6}`}</div>
            <div>{`word7: ${d.word7}`}</div>
            <div>{`word8: ${d.word8}`}</div>
            <div>{`word9: ${d.word9}`}</div>
            <div>{`word10: ${d.word10}`}</div>
            <textarea name="text" id="" cols="120" rows="3" placeholder='Write Your Feedback Here'></textarea>
            <button className='submitres'>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}
