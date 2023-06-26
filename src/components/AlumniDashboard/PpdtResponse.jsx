import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import './PpdtResponse.css'

export default function PpdtResponse() {
  const [answers,getAnswers] = useState([])
  const [feedback,setFeedback] = useState('')
  const [curResponse,setCurResponse] = useState({})
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

  const handleRating = async (e,objectid) => {
    console.log(e,objectid,localStorage.getItem('email'));
    try {
      const resp = await axios.post('http://localhost:5000/api/ppdt_resp_by_id',{
        oid: objectid,
        email: localStorage.getItem('email'),
        rating: e
      });
      console.log(resp);
      // setCurResponse(resp.data);
      if(resp.data.errmsg){
        alert(resp.data.errmsg);
      }
      else {
      alert(resp.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
    
   }

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
          <div key={d._id} className='ppdtfeedcontent'>
            <div className='ppdtcon1'>
              <div>
              <p className='text-muted' style={{fontWeight: "bolder"}}>Aspirant's Email: {d.username}</p>
              </div>

              <div>
                <p className='text-muted' style={{fontWeight: "bolder"}}>Ppdt Picture: </p>
                <p style={{color: "black"}} className='picurl'><img src={d.url} alt="" className='picurl'/></p>
              </div>
            
            
            <textarea name="text" id="" value={feedback} onChange={(e) => setFeedback(e.target.value)} cols="70" rows="3" placeholder='Write Your Feedback Here'></textarea>

            <button className='submitres' onClick={(e)=>{postPpdtFeedback(d.story,d.url)}}>Submit</button>
            </div>
            <div className='ppdtcon2'>
              <p className="text-muted" style={{fontWeight: "bolder"}}>Your Story: {" "}</p>
            <p className='response'>Story: {d.story}</p>
            </div>
            <Rating
        onClick={(e) =>handleRating(e,d._id)}
        showTooltip = {true}
        tooltipArray= {['Bad', 'Average', 'Good', 'Great', 'Awesome']}
      />
            
          </div>
        ))
      }
      </div>
    </>
  )
}
