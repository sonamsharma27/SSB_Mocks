import React, { useState } from "react";
import WatInput from "./WatInput";
import Watword from "./Watword";

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
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-center p-2 align-self-center bg-success rounded-2">
        Word Association Test
      </h1>
      <Watword words={words}  />
      <WatInput setStoryInput={setStoryInput} storyInput={storyInput} words={words} />
    </div>
  );
}

export default Wat;