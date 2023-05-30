import "./Srt.css";
import { React, useState, useEffect, useRef } from "react";
import PpdtTimer from '../Ppdt/PpdtTimer'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from 'axios';
export default function Srt() {
  // const navigate = useNavigate();
//   const [showImage, setShowImage] = useState(true);
//   const [url, setUrl] = useState("");
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState('');
  const srtSol = useRef("");
 

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/srt');
    //   console.log(response);
      await setQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // localStorage.getItem('email')
  useEffect(() => {
  getData()
  console.log('use effect');
    setTimeout(() => {
      console.log('in timeout', result);
      axios.post('http://localhost:5000/api/srt_resp', {
        username : localStorage.getItem('email'),
        result: srtSol.current
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
      setQuestions()
      console.log(result);
    },10000);
  }, []);

  return (
    <>
    <div className="timer position-absolute">
         { questions?<CountdownCircleTimer
            isPlaying
            duration={400}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[23, 15, 8, 0]}
            size = {160}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>: <></>}
        </div>
    <div className=" mt-2 p-0 d-flex flex-column align-items-center justify-content-center bg-grey ">
        <div>
            <div className=" m-0 p-0 d-flex">
          <div className="me-auto">
            <h1 className="Gpe text-center">Situation Reaction Test(SRT)</h1>
          </div>
            </div>
        </div>
      <div className="container grid_div1 shadow-lg p-3 mb-5 bg-body rounded">
        {questions?  
        (
          <>
          <div className="situation">
          {
        questions.map((d) => (
          <ul key={d._id} className="sitlist">
            <li style={{color: "black"}} className="sititems">{d.questions}</li>
          </ul>
        ))
      }
      </div>
      <div className="input1"> 
          <p className="text-center">Write your solution here.</p>
            <textarea className="textar" name="srt_resp" value={result} onChange={(e)=>{ srtSol.current=e.target.value; setResult(e.target.value)}} cols="100" rows="10">
            
            </textarea>
            
          </div>
    
          
          
          </>
        )
        :
        (
          <div className="ques_submit">
          <h1>Your response has been submitted.</h1>
          <div className="ques_link">
            <Link className="ques_dash" to="/dashboard">
              Click here to go to dashboard
            </Link>{" "}
            <br /> <br />
            <Link className="ques_dash" to="/srtintro">
              Try another SRT test
            </Link>
          </div>
        </div>
      
      )
        
        }
      </div>
    </div>
    
        
    </>
  );
}
{/* <CountdownCircleTimer
            isPlaying
            duration={4000}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[23, 15, 8, 0]}
            size = {160}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer> */}