import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Gpeanswers.css'

export default function GpeAnswers() {
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
          <div key={d._id} className='gpecontents'>
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
