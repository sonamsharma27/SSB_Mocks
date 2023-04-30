import React from 'react'

function InputCard({setStoryInput,img_no, storyInput}) {
  return (
    <div className='container'>
    <div className="carousel-item active">
              <textarea
                id={`tatinput$`+img_no}
                name="tatinput"
                value={storyInput.s0}
                rows="8"
                cols="70"
                onChange={(e) => setStoryInput({s0:e.target.value})}
              ></textarea>
              <div className="text-center mt-5">Story {img_no}</div>
    </div>
    </div>
  )
}

export default InputCard