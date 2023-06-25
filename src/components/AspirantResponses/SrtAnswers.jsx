import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Srtanswers.css'

export default function SrtAnswers() {
  const [answers,getAnswers] = useState([])
  const [feedbackAnswers,getFeedbackAnswers] = useState([])
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

  const srtData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/srt_feedback');
      console.log(response);
      await getFeedbackAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const postSrtData = async (username,result,ques) => {
    axios.post('http://localhost:5000/api/srt_feedback', {
    username: username,
    result: result,
    alumniname: localStorage.getItem('email'),
    feedback: feedback,
    situation: ques
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  srtData()
  alert('srt Feedback Saved Successfully...!')
  setFeedback('')
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <div className='srtmain container'>
          {
        answers.map((d) => (
          <div key={d._id} className='srtcontents container'>
            <p style={{color: "black"}}>Email: {d.username}</p>
            <div className='m-0 '>
              <p className='fw-bolder mt-1 mb-1'>Situations:</p>
              {d.questions.split("|||").map((item,index)=>(<li className={item.length?"":"d-none"} key={index}>{item}</li>))}
            </div>
            <p style={{color: "black"}} className='mb-1 mt-2 fw-bolder '>Result:</p>
            <p>{d.result}</p>
          </div>
        ))
      }
      </div>
    </>
  )
}