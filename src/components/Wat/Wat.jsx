import React, { useState, useEffect, useRef } from "react";
import WatInput from "./WatInput";
import Watword from "./Watword";
import { Link } from "react-router-dom";
import axios from "axios";
import './Wat.css'
// const getWords = () => {
//   return [
//     "Guilty",
//     "Battle",
//     "Village",
//   ];
// };

function Wat() {
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
  
  const [personality, setPersonality] = useState([]);
  const [timeup, setTimeUp] = useState(false);
  const [words, setWords] = useState([]);

  const getWords = () => {
    if(words.length > 0) return;
    fetch("http://localhost:5000/api/wat")
      .then((res) => res.json())
      .then((res) => {
        setWords(res);
        setStoryInput(res)
      });
  }

  getWords()
  setTimeout(() => {
    setTimeUp(true);
  }, 30000);
  
  useEffect(() => {
    console.log('useEffect');
    for(var i=0; i<11; i++){
      wordsRef.current.push('');
    }
    if(!timeup) return;

    // let personality_detection_string = storyInput.s0!==undefined ?storyInput.s0:'' +
    // storyInput.s1!==undefined ?storyInput.s1:'' + 
    // storyInput.s2!==undefined ?storyInput.s2:'' +
    // storyInput.s3!==undefined ?storyInput.s3:'' +
    // storyInput.s4!==undefined ?storyInput.s4:'' +
    // storyInput.s5!==undefined ?storyInput.s5:'' +
    // storyInput.s6!==undefined ?storyInput.s6:'' + 
    // storyInput.s7!==undefined ?storyInput.s7:'' +
    // storyInput.s8!==undefined ?storyInput.s8:'' +
    // storyInput.s9!==undefined ?storyInput.s9:'' ;
    // console.log(personality_detection_string)

    let personality_detection_string = "";
    wordsRef.current.forEach(word => personality_detection_string += word);
    console.log(personality_detection_string,wordsRef);
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    wordsRef.current= [];
    // axios.post("http://localhost:5000/api/personality_detection",{
    //   personality_detection_string
    // })
    // .then((res) => res.json())
    // .then((res) => setPersonality(res));
  },[timeup]);
  return (
    <>
{timeup ? (
  <div className="ques_submit">
    <h1>Your response has been submitted.</h1>
    <div className="ques_link">
      <Link
        className="ques_dash btn btn-warning border border-5 border-primary"
        to="/dashboard"
      >
        Click here to go to dashboard
      </Link>{" "}
      <br /> <br />
      <Link className="ques_dash btn btn-info" to="/watintro">
        Try another WAT test
      </Link>
    </div>
  </div>
) : (
  <div className="d-flex flex-column justify-content-center">
    <h1 className="text-center p-2 align-self-center bg-success rounded-2">
    Word Association Test
    </h1>
    {words.length ? (
      <>
        {" "}
        <Watword words={words} />
        <WatInput
          setStoryInput={setStoryInput}
          storyInput={storyInput}
          words={words}
          wordsRef={wordsRef}
        />
        {/* {personality.length > 0 ? <div className="container bg-info rounded border border-info p-2"> <h2>Your personality trait based on your WAT responses is :</h2> <br/>
      {personality.map(item => (<>
        <table className=" bg-light p-3 ">
          <thead >
            <tr>
              <th className="border border-dark p-3">Personality Type</th>
              <th className="border border-dark p-3">Associated Probability</th>
            </tr>
          </thead>
          <tbody>
           {
            item.predictions?.map((type)=>(<tr>
              <td className="border border-dark p-3">{type.prediction}</td>
              <td className="border border-dark p-3">{type.probability}</td>
            </tr>))
           }
          </tbody>
        </table>
      </>))}
      </div>:<></>} */}
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

