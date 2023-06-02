import React, { useState, useEffect, useRef } from "react";
import WatInput from "./WatInput";
import Watword from "./Watword";
import { Link } from "react-router-dom";
import axios from "axios";
import PpdtTimer from '../Ppdt/PpdtTimer'
import './Wat.css'

function Wat() {
  const [personality, setPersonality] = useState([]); 
  let personality_detection_string = useRef("");
  const [storyInput, setStoryInput] = useState({
    s1: "",
    s0: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
  });
  const wordsRef = useRef([]);
  
  const [resp, setResp] = useState({});
  const [timeup, setTimeUp] = useState(false);
  const [words, setWords] = useState([]);
  const [show, setShow] = useState(false);

  const getWords = () => {
    if(words.length > 0) return;
    fetch("http://localhost:5000/api/wat")
      .then((res) => res.json())
      .then((res) => {
        setWords(res);
        setStoryInput(res);
      });
  }

  getWords()
  setTimeout(() => {
    setTimeUp(true);
  }, 3000000);
 

  
const handleButtonClick = () =>{
  axios.post("http://localhost:5000/api/personality_detection",{
    personality_detection_string : personality_detection_string.current
  })
  // .then((res) => res.json())
  .then((res) =>{
    setResp(res);
});
}

useEffect(()=>{
  if(resp?.data===undefined) return;
  let arr=[];
  for (let i in resp.data[0]){
    if(i!=='id' &&  resp?.data[0][i]>0.8 && arr.length<5)
      arr.push({prediction: i, probability: resp?.data[0][i]});
  }
  setPersonality(arr);
  setShow(true);
  setTimeout(()=>{},500);
},[resp])
  useEffect(() => {
    for(var i=0; i<11; i++){
      wordsRef.current.push('');
    }
    if(!timeup) return;

    wordsRef.current.forEach(word => personality_detection_string.current += word);
    axios
    .post("http://localhost:5000/api/wat_resp", {
      username: localStorage.getItem('email'),
      word1: words[0]?.word,
      word2: words[1]?.word,
      word3: words[2]?.word,
      word4: words[3]?.word,
      word5: words[4]?.word,
      word6: words[5]?.word,
      word7: words[6]?.word,
      word8: words[7]?.word,
      word9: words[8]?.word,
      word10: words[9]?.word,
      s1: wordsRef.current[0],
      s2: wordsRef.current[1],
      s3: wordsRef.current[2],
      s4: wordsRef.current[3],
      s5: wordsRef.current[4],
      s6: wordsRef.current[5],
      s7: wordsRef.current[6],
      s8: wordsRef.current[7],
      s9: wordsRef.current[8],
      s10: wordsRef.current[9],
    })
    .then(function (response) {
      ;
    })
    .catch(function (error) {
      console.log(error);
    })
    wordsRef.current= [];
  },[timeup]);

  return (
    <>
    
{timeup ? (
  
  <div className="ques_submit">
    <h1>Your response has been submitted.</h1>
    <button className={personality.length?'d-none':'btn btn-outline-info fw-bolder mt-5'} onClick={handleButtonClick}>Curious to know your personality traits based on your WAT response? Click here</button>
  { (personality.length) ? <div className={ show ? "container bg-light rounded border border-1 p-2":"d-none"}> <h2>Your personality traits based on your WAT response are:</h2> <br/>
        <div className="d-flex justify-content-between">
      {personality?.map((type,index) => (<h3 className="p-3 m-2 pers" key={type.prediction}>
              {type.prediction.charAt(0).toUpperCase() + type.prediction.substring(1)}
            </h3>))
      }
        </div>
      </div>:null}
     
    <div className="ques_link">

    
      <Link
        className="ques_dash btn btn-warning border border-5 border-primary m-0"
        to="/dashboard"
      >
        Click here to go to dashboard
      </Link>{" "}
      <br /> <br />
      <Link className="ques_dash btn btn-info m-0" to="/watintro">
        Try another WAT test
      </Link>
    </div>
  </div>
) : (
  
  <div className="d-flex flex-column justify-content-center">
    <PpdtTimer/>
    <h1 className="text-center p-2 align-self-center bg-success rounded-2">
    Word Association Test
    </h1>
    {words.length ? (
      <>
        <Watword words={words} />
        <WatInput
          setStoryInput={setStoryInput}
          storyInput={storyInput}
          words={words}
          wordsRef={wordsRef}
        />
        
      </>
    ) : (
      <></>
    )}
  </div>
)}

    
    </>
    
  );
}

export default Wat;

