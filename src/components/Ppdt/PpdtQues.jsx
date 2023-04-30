import React from 'react'
import PpdtTimer from './PpdtTimer'
import './PpdtQues.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function PpdtQues({url}) {

    const [showQuestions, setShowQuestions] = useState(true);
    const [userResp, setUserResp] = useState({
      username : 'username',
      url: url,
      title : '',
      main_character : '',
      characters: '',
      total_characters: '',
      story: ''
    })
  
    const handleChange = (e) => {
      setUserResp({...userResp, [e.target.name] : e.target.value})
    }

    useEffect(()=>{
      setTimeout(()=>{
        setShowQuestions(false);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'text/json' },
          body: JSON.stringify({ ...userResp })
          
      };
      fetch('http://localhost:5000/api/ppdt_resp', requestOptions)
          .then(response => response.json())
          .then(response=>console.log(response));
      },10000)
    },[]);
  return (
    <div className='ppdt-con'>
        {showQuestions?
        <div className="question-container">
        <PpdtTimer/>
      <div className='question_form'>
        <form action="submit" method="post">
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Title of the story:</label>
          <input type="text" className='ques_input' name='title' value={userResp.title} onChange={(e)=>handleChange(e)}/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the name of the main character of your story:</label>
          <input type="text" className='ques_input' name='main_character' value={userResp.main_character} onChange={(e)=>handleChange(e)}/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the number of characters in your story:</label>
          <input type="number" className='ques_input' name='total_characters' value={userResp.total_characters} onChange={(e)=>handleChange(e)} />
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the name, age ,sex , mood of the all characters of your story:</label>
          <textarea type="text" className='ques_input' name='characters' value={userResp.characters} onChange={(e)=>handleChange(e)}/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Write your story here:</label>
          <textarea type="text" className='ques_input' name='story' value={userResp.story} onChange={(e)=>handleChange(e)}/>
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

