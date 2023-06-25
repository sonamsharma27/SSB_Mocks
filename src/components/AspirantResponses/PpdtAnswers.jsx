import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Ppdtanswers.css'

export default function PpdtAnswers() {
    const [answers,getAnswers] = useState([])
    const [feedback,setFeedback] = useState('')
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
  
    const postPpdtFeedback = async (story,url) => {
      axios.post('http://localhost:5000/api/ppdtfeedbackstore', {
        story: story,
        url: url,
        feedback: feedback
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        alert('ppdt Feedback Saved Successfully...!')
        setFeedback('')
    }
  
    useEffect(()=>{
      getPpdtData()
    },[])
    return (
      <>
        <div className='srtmain'>
            {
          answers.map((d) => (
            <div key={d._id} className='ppdtfeedcontents'>
              <div className='ppdtcon1'>
                <div>
                <p className='text-muted' style={{fontWeight: "bolder"}}>Your Email: {d.username}</p>
                </div>
  
                <div>
                  <p className='text-muted' style={{fontWeight: "bolder"}}>Ppdt Picture: </p>
                  <p style={{color: "black"}} className='picurl'><img src={d.url} alt="" className='picurl'/></p>
                </div>
              </div>
              <div className='ppdtcon2'>
                <p className="text-muted" style={{fontWeight: "bolder"}}>Your Story: {" "}</p>
              <p className='response'>Story: {d.story}</p>
              </div>
              
              {/* <p style={{color: "black"}}>Result: {d.result}</p> */}
              
            </div>
          ))
        }
        </div>
      </>
    )
}
