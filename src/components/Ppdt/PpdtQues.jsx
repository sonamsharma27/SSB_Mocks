import React from 'react'
import PpdtTimer from './PpdtTimer'
import './PpdtQues.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function PpdtQues({url}) {
    const [showQuestions, setShowQuestions] = useState(true);
    setTimeout(()=>{
        setShowQuestions(false);
    },10000)
  return (
    <div className='ppdt-con'>
        {showQuestions?
        <div className="question-container">
        <PpdtTimer/>
      <div className='question_form'>
        <form action="submit" method="post">
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Title of the story:</label>
          <input type="text" className='ques_input'/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the name of the main character of your story:</label>
          <input type="text" className='ques_input'/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the number of characters in your story:</label>
          <input type="number" className='ques_input' />
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the name, age ,sex , mood of the all characters of your story:</label>
          <textarea type="text" className='ques_input' />
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Write your story here:</label>
          <textarea type="text" className='ques_input'/>
          </div>
        </form>
    </div>
    </div>
    :
    <div className='ques_submit'>
        <h1>Your response has been submitted.</h1>
        <div className='ques_link'>
        <Link className='ques_dash' to="/dashboard">Click here to go to dashboard</Link> <br /> <br />
        <Link className='ques_dash' to="/ppdt">Try another PPDT test</Link>
        </div>
    </div>
        }
    </div>
  )
}

