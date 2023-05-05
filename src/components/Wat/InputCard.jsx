import React from 'react'

function InputCard({setStoryInput,img_no, storyInput}) {
  return (
    <div className='container'>
    <div className="carousel-item active">
              <textarea
                id={`tatinput$`+img_no}
                name={`s${img_no}`}
                value={"storyInput"}
                rows="8"
                cols="70"
                onChange={(e) => {
                  console.log(e.target.name, e.target.value);
                  // setStoryInput({
                  //   ...storyInput,
                  //   [e.target.name]: e.target.value,
                  // });
                }}
              ></textarea>
              <div className="text-center mt-5">{`Story ${img_no}`}</div>
    </div>
    </div>
  )
}

export default InputCard