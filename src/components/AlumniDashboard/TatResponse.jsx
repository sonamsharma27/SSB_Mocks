import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './TatResponse.css'

export default function TatResponse() {
  const [answers,getAnswers] = useState([])
  const [feedback,setFeedback] = useState('')
  const getTatData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tat_resp');
    //   console.log(response);
      await getAnswers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submittatFeedback = (username,url1,url2,url3,url4,url5,url6,url7,url8,url9,url10,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10) =>{
    // console.log(url);
    axios.post('http://localhost:5000/api/tat_feedback', {
    feedback: feedback,
    username: username,
    alumniname: localStorage.getItem('email'),
    url1: url1,
        url2: url2,
        url3: url3,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        url8: url8,
        url9: url9,
        url10: url10,
        s1: s1,
        s2: s2,
        s3: s3,
        s4: s4,
        s5: s5,
        s6: s6,
        s7: s7,
        s8: s8,
        s9: s9,
        s10: s10,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  alert('Tat Feedback Saved Successfully...!')
  setFeedback('')
}
  useEffect(()=>{
    getTatData()
    
  },[])
  return (
    <>
      <div className='tatmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='tatcontent'>
            <p style={{color: "black"}}>Email: {d.username}</p>
            <p style={{color: "black"}}>Picture: 
            </p>
            {/* <br /> */}
            <div className='tatcont'>
            <div className='taturl'>Picture1: <img src={d.url1} alt="" /></div>
            <div className='taturl'>Picture2: <img src={d.url2} alt="" /></div>
            <div className='taturl'>Picture3: <img src={d.url3} alt="" /></div>
            <div className='taturl'>Picture4: <img src={d.url4} alt="" /></div>
            <div className='taturl'>Picture5: <img src={d.url5} alt="" /></div>
            <div className='taturl'>Picture6: <img src={d.url6} alt="" /></div>
            <div className='taturl'>Picture7: <img src={d.url7} alt="" /></div>
            <div className='taturl'>Picture8: <img src={d.url8} alt="" /></div>
            <div className='taturl'>Picture9: <img src={d.url9} alt="" /></div>
            <div className='taturl'>Picture10: <img src={d.url10} alt="" /></div>
            </div>

            <p style={{color: "black"}}>Picture Answers: 
            </p>
            <div className='tatcont'>
            <div className='taturl'>s1: {d.s1}</div>
            <div className='taturl'>s2: {d.s2}</div>
            <div className='taturl'>s3: {d.s3}</div>
            <div className='taturl'>s4: {d.s4}</div>
            <div className='taturl'>s5: {d.s5}</div>
            <div className='taturl'>s6: {d.s6}</div>
            <div className='taturl'>s7: {d.s7}</div>
            <div className='taturl'>s8: {d.s8}</div>
            <div className='taturl'>s9: {d.s9}</div>
            <div className='taturl'>s10: {d.s10}</div>
            </div>
            <textarea name="text" id="" cols="120" rows="3" placeholder='Write Your Feedback Here' value={feedback}
                onChange={(e) => setFeedback(e.target.value)}></textarea>
            <button className='submitres' onClick={(e)=>{submittatFeedback(d.username,d.url1,d.url2,d.url3,d.url4,d.url5,d.url6,d.url7,d.url8,d.url9,d.url10,d.s1,d.s2,d.s3,d.s4,d.s5,d.s6,d.s7,d.s8,d.s9,d.s10)}}>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}
