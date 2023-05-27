import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './TatResponse.css'

export default function TatResponse() {
  const [answers,getAnswers] = useState([])
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
            
            <textarea name="text" id="" cols="120" rows="3" placeholder='Write Your Feedback Here'></textarea>
            <button className='submitres'>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}
