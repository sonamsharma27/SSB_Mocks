import React from "react";
import './TatImg.css'
import InputCard from "./InputCard";
function TatInput({ setStoryInput, storyInput }) {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center mt-2 ">
        <div
          id="carouselExampleCaptions"
          className="carousel slide "
          data-bs-ride="carousel"
        > 
          <div className="carousel-inner">
            <InputCard className='active' setStoryInput={setStoryInput} storyInput={storyInput} img_no={1} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={2} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={3} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={4} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={5} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={6} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={7} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={8} />
            <InputCard setStoryInput={setStoryInput} storyInput={storyInput} img_no={9} />
          </div>
        </div>
        <button
            className="btn btn-warning border-0 prev "
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="text-dark">Prev</span>
          </button>
          <button
            className="btn btn-warning  next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="text-dark">Next</span>
          </button>
      </div>
    </>
  );
}

export default TatInput;