import React, { useState, Fragment } from "react";
import "./WatInput.css";

function WatInput({ setStoryInput, storyInput }) {
  const [active, setActive] = useState(1);
  
  return (
    <>
      <div className="d-flex justify-content-center m-6" style={{marginTop: "4rem"}}>
        <div
          onClick={() => setActive(1)}
          className={active === 1 ? "active_story" : "story"}
        >
          Word1
        </div>
        <div
          onClick={() => setActive(2)}
          className={active === 2 ? "active_story" : "story"}
        >
          Word2
        </div>
        <div
          onClick={() => setActive(3)}
          className={active === 3 ? "active_story" : "story"}
        >
          Word3
        </div>
        <div
          onClick={() => setActive(4)}
          className={active === 4 ? "active_story" : "story"}
        >
          Word4
        </div>
        <div
          onClick={() => setActive(5)}
          className={active === 5 ? "active_story" : "story"}
        >
          Word5
        </div>
        <div
          onClick={() => setActive(6)}
          className={active === 6 ? "active_story" : "story"}
        >
          Word6
        </div>
        <div
          onClick={() => setActive(7)}
          className={active === 7 ? "active_story" : "story"}
        >
          Word7
        </div>
        <div
          onClick={() => setActive(8)}
          className={active === 8 ? "active_story" : "story"}
        >
          Word8
        </div>
        <div
          onClick={() => setActive(9)}
          className={active === 9 ? "active_story" : "story"}
        >
         Word9
        </div>
        <div
          onClick={() => setActive(10)}
          className={active === 10 ? "active_story" : "story"}
        >
          Word10
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <textarea
          className={active === 1 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s1}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s1: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 2 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s2}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s2: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 3 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s3}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s3: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 4 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s4}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s4: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 5 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s5}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s5: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 6 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s6}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s6: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 7 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s7}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s7: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 8 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s8}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s8: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={active === 9 ? "border border-2 border-primary" : "d-none"}
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s9}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s9: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
        <textarea
          className={
            active === 10 ? "border border-2 border-primary" : "d-none"
          }
          rows="8"
          cols="70"
          placeholder="Write your story here."
          value={storyInput.s10}
          onChange={(e) => {
            setStoryInput({ ...storyInput, s10: e.target.value });
            console.log(e.target.value);
          }}
        ></textarea>
      </div>

    </>
  );
}

export default WatInput;
