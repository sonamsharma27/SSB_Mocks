import React, { useState } from "react";
import WatInput from "./WatInput";
import Watword from "./Watword";
import './Wat.css'
const getWords = () => {
  
  return [
    "Guilty",
    "Battle",
    "Village",
  ];
};

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
  const words=getWords();
  const [personality, setPersonality] = useState([]);
  fetch("http://localhost:5000/api/personality_detection")
  .then((res) => res.json())
  .then((res) => setPersonality(res));
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-center p-2 align-self-center bg-success rounded-2">
        Word Association Test
      </h1>
      <Watword words={words}  />
      <WatInput setStoryInput={setStoryInput} storyInput={storyInput} words={words} />
      {personality.length > 0 ?<div className="container bg-info rounded border border-info p-2"> <h2>Your personality trait based on your WAT responses is :</h2> <br/>
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
      </div>:<></>}
    </div>
  );
}

export default Wat;