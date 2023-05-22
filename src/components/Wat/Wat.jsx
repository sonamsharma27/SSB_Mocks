import React, { useState, useEffect } from "react";
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
  // const words=getWords();
  const [personality, setPersonality] = useState([]);
  fetch("http://localhost:5000/api/personality_detection")
  .then((res) => res.json())
  .then((res) => setPersonality(res));

  const [timeup, setTimeUp] = useState(false);
  const [words, setWords] = useState([]);

  const getWords = () => {
    if(words.length > 0) return;
    fetch("http://localhost:5000/api/wat")
      .then((res) => res.json())
      .then((res) => {
        setWords(res);
      });
  }

  getWords()
  setTimeout(() => {
    setTimeUp(true);
  }, 30000);

  useEffect(() => {axios
    .post("http://localhost:5000/api/wat_resp", {
      username: "John",
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
      s1: storyInput.s0,
      s2: storyInput.s1,
      s3: storyInput.s2,
      s4: storyInput.s3,
      s5: storyInput.s4,
      s6: storyInput.s5,
      s7: storyInput.s6,
      s8: storyInput.s7,
      s9: storyInput.s8,
      s10: storyInput.s9,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })},[timeup]);
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
        />
        {/* {personality.length > 0 ?<div className="container bg-info rounded border border-info p-2"> <h2>Your personality trait based on your WAT responses is :</h2> <br/>
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

