import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Watanswers.css'

export default function WatAnswers() {
  const [answers,getAnswers] = useState([])
  const [feedback,setFeedback] = useState('')
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

  const submitWatFeedback = (username,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10) =>{
        // console.log(word);
        axios.post('http://localhost:5000/api/wat_feedback', {
        feedback: feedback,
        username: username,
        alumniname: localStorage.getItem('email'),
        word1: word1,
            word2: word2,
            word3: word3,
            word4: word4,
            word5: word5,
            word6: word6,
            word7: word7,
            word8: word8,
            word9: word9,
            word10: word10,
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
      alert('Wat Feedback Saved Successfully...!')
      setFeedback('')
  }
  useEffect(()=>{
    getWatData()
    
  },[])
  return (
    <>
      <div className='srtmain'>
          {
        answers.map((d) => (
          <div key={d._id} className='watcontents'>
            <p className='fw-bolder text-muted'>Your Email: {d.username}</p>
            <p className='fw-bolder text-muted'>Your response:</p>
            {/* <br /> */}
            <div className="watfeedcont m-2"> 
            <li><span >{`${d.word1}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s1}`}</span></li>
            <li><span >{`${d.word2}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s2}`}</span></li>
            <li><span >{`${d.word3}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s3}`}</span></li>
            <li><span >{`${d.word4}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s4}`}</span></li>
            <li><span >{`${d.word5}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s5}`}</span></li>
            <li><span >{`${d.word6}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s6}`}</span></li>
            <li><span >{`${d.word7}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s7}`}</span></li>
            <li><span >{`${d.word8}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s8}`}</span></li>
            <li><span >{`${d.word9}`}: &nbsp;</span><span className='fw-bolder words'>{`${d.s9}`}</span></li>
            <li><span >{`${d.word10}`}:&nbsp;</span><span className='fw-bolder words'>{`${d.s10}`}</span></li>
                </div>
          </div>
        ))
      }
      </div>
    </>
  )
}
