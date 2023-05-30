import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './WatResponse.css'

export default function WatResponse() {
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
          <div key={d._id} className='watcontent'>
            <p style={{color: "black"}}>Email: {d.username}</p>
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

            <p style={{color: "black"}}>Word Answers: 
            </p>
            <div>{`s1: ${d.s1}`}</div>
            <div>{`s2: ${d.s2}`}</div>
            <div>{`s3: ${d.s3}`}</div>
            <div>{`s4: ${d.s4}`}</div>
            <div>{`s5: ${d.s5}`}</div>
            <div>{`s6: ${d.s6}`}</div>
            <div>{`s7: ${d.s7}`}</div>
            <div>{`s8: ${d.s8}`}</div>
            <div>{`s9: ${d.s9}`}</div>
            <div>{`s10: ${d.s10}`}</div>
            <textarea name="text" id="" cols="120" rows="3" placeholder='Write Your Feedback Here' value={feedback}
                onChange={(e) => setFeedback(e.target.value)}></textarea>
            <button className='submitres' onClick={(e)=>{submitWatFeedback(d.username,d.word1,d.word2,d.word3,d.word4,d.word5,d.word6,d.word7,d.word8,d.word9,d.word10,d.s1,d.s2,d.s3,d.s4,d.s5,d.s6,d.s7,d.s8,d.s9,d.s10)}}>Submit</button>
          </div>
        ))
      }
      </div>
    </>
  )
}
