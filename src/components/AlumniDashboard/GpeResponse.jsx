<<<<<<< HEAD
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
            <div className='gpecon1'>
              <div>
              <p className='text-muted' style={{fontWeight: "bolder"}}>Your Email: {d.username}</p>
              </div>

              <div>
                <p className='text-muted' style={{fontWeight: "bolder"}}>Gpe Picture: </p>
                <p style={{color: "black"}} className='picurl'><img src={d.url} alt="" className='picurl'/></p>
              </div>
            <div>
            <p className='text-muted' style={{fontWeight: "bolder"}}>Your Result: </p>
            <p className='text-muted' style={{fontWeight: "bolder"}}>{d.solution}</p>
            </div>
            
            <textarea name="text" id="" value={feedback} onChange={(e) => setFeedback(e.target.value)} cols="70" rows="3" placeholder='Write Your Feedback Here'></textarea>
            <button className='submitres' onClick={(e)=>{postGpeFeedback(d.problem,d.url,d.solution)}}>Submit</button>
            </div>

            <div className='gpecon2'>
              <p className='text-muted' style={{fontWeight: "bolder"}}>Your Problem: </p>
              <p className='response'>Problem: {d.problem}</p>
            </div>
            
            
          </div>
        ))
      }
      </div>
    </>
  )
}
=======
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
            <div className='gpecon1'>
              <div>
              <p className='text-muted' style={{fontWeight: "bolder"}}>Your Email: {d.username}</p>
              </div>

              <div>
                <p className='text-muted' style={{fontWeight: "bolder"}}>Gpe Picture: </p>
                <p style={{color: "black"}} className='picurl'><img src={d.url} alt="" className='picurl'/></p>
              </div>
            <div>
            <p className='text-muted' style={{fontWeight: "bolder"}}>Your Result: </p>
            <p className='text-muted' style={{fontWeight: "bolder"}}>{d.solution}</p>
            </div>
            
            <textarea name="text" id="" value={feedback} onChange={(e) => setFeedback(e.target.value)} cols="70" rows="3" placeholder='Write Your Feedback Here'></textarea>
            <button className='submitres' onClick={(e)=>{postGpeFeedback(d.problem,d.url,d.solution)}}>Submit</button>
            </div>

            <div className='gpecon2'>
              <p className='text-muted' style={{fontWeight: "bolder"}}>Your Problem: </p>
              <p className='response'>Problem: {d.problem}</p>
            </div>
            
            
          </div>
        ))
      }
      </div>
    </>
  )
}
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
