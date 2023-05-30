import "./Gpe.css";
import { React, useState, useEffect } from "react";
import PpdtTimer from '../Ppdt/PpdtTimer'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from 'axios';
export default function Gpe() {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(true);
  const [url, setUrl] = useState("");
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  useEffect(() => {
    if(problem.length) return;
    setTimeout(()=>{
      fetch("http://localhost:5000/api/gpe")
        .then((res) => res.json())
        .then((res) => {setUrl(res.url); setProblem(res.problem);});
    },1)
    setTimeout(() => {
      setShowImage(false);
     
    }, 10000);
  });
 useEffect(()=>{
  axios.post('http://localhost:5000/api/gpe_resp', {
    username: localStorage.getItem('email'),
    url: url,
    problem: problem,
    solution: solution
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(solution);
 },[showImage])
  return (
    <>
        <div className="timer position-absolute">
         { showImage?<PpdtTimer />: <></>}
        </div>
    <div className=" mt-2 p-0 d-flex flex-column align-items-center justify-content-center bg-grey ">
        <div>
            <div className=" m-0 p-0 d-flex">
          <div className="me-auto">
            <h1 className="Gpe text-center">Group Planning Exercise(GPE)</h1>
          </div>
            </div>
        </div>
      <div className="container grid_div shadow-lg p-3 mb-5 bg-body rounded">
        {showImage ? (
          <>
          <div className="row ">
            <div className="col-6">
              <img
                src={url}
                alt="Gpe"
                className="gpe-img border-2 border-dark"
              />
            </div>
            <div  className="col-6 border bg-outline-success me-1 problem">{problem}</div>
          </div>
          <div className="input row "> 
          <p className="mx-5 me-2">Write your solution here.</p>
            <textarea name="gpe_resp"  value={solution} onChange={e=>setSolution(e.target.value)} cols="100" rows="10"></textarea>
          </div>
          </>
        ) : (
          <div className="ques_submit">
            <h1>Your response has been submitted.</h1>
            <div className="ques_link">
              <Link className="ques_dash" to="/dashboard">
                Click here to go to dashboard
              </Link>{" "}
              <br /> <br />
              <Link className="ques_dash" to="/gpe_intro">
                Try another GPE test
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
