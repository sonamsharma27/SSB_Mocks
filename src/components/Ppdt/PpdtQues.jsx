import React from 'react'
import PpdtTimer from './PpdtTimer'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function PpdtQues() {
    const [showQuestions, setShowQuestions] = useState(true);
    setTimeout(()=>{
        setShowQuestions(false);
    },10000)
  return (
    <div className='ppdt-con'>
        {showQuestions?
        <div className="question-container">
        <PpdtTimer/>
      <div>
        <form action="submit" method="post">
          <div>
          <label htmlFor="">Title of the story</label>
          <input type="text" />
          </div>
          <div>
          <label htmlFor="">Enter the name of the main character of your story</label>
          <input type="text" />
          </div>
          <div>
          <label htmlFor="">Enter the number of characters in your story</label>
          <input type="number" />
          </div>
          <div>
          <label htmlFor="">Enter the name, age ,sex , mood of the all characters of your story</label>
          <textarea type="text" />
          </div>
          <div>
          <label htmlFor="">Write your story here</label>
          <textarea type="text" />
          </div>
        </form>
    </div>
    </div>
    :
    <div>
        <h1>Your response has been submitted.</h1>
        <div>
        <Link to="/dashboard">Click here to go to dashboard</Link> <br /> <br />
        <Link to="/ppdt">Try another PPDT test</Link>
        </div>
    </div>
        }
    </div>
  )
}

