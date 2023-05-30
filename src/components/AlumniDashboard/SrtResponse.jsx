import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './SrtResponse.css'


export default function SrtResponse() {
  const [answers,getAnswers] = useState([])
  const [feedback,setFeedback] = useState('')

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

  const postSrtData = async (username,result) => {
    axios.post('http://localhost:5000/api/srt_feedback', {
    username: username,
    result: result,
    alumniname: localStorage.getItem('email'),
    feedback: feedback,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  alert('srt Feedback Saved Successfully...!')
  setFeedback('')
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='srtcontent'>
            <p style={{color: "black"}}>Email: {d.username}</p>
            <p style={{color: "black"}}>Result: {d.result}</p>
            <textarea name="text" id="" value={feedback} onChange={(e) => setFeedback(e.target.value)} cols="120" rows="4" placeholder='Write Your Feedback Here'></textarea>
            <button className='submitres' type='submit' onClick={(e)=>{postSrtData(d.username,d.result)}}>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere soluta obcaecati tenetur mollitia aperiam totam praesentium harum dolorem! Neque quasi perspiciatis rem quo voluptate cum quia ducimus, itaque, possimus magni autem incidunt repellat!