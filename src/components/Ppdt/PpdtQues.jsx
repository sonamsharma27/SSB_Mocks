import React from 'react'
import PpdtTimer from './PpdtTimer'
import './PpdtQues.css'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function PpdtQues({url}) {
    const [showQuestions, setShowQuestions] = useState(true);
    const [userResp, setUserResp] = useState({
      username : 'username',
      title : '',
      main_character : '',
      characters: '',
      total_characters: '',
      story: '',
      url: url
    })
    const handleChange = (e,name) => {
      if(name==='title')
      setUserResp({...userResp, title : e.target.value})
      else if(name==='main_character')
      setUserResp({...userResp, main_character : e.target.value})
      else if(name==='total_characters')
      setUserResp({...userResp, total_characters : e.target.value})
      else if(name==='story')
      setUserResp({...userResp, story : e.target.value})
      else if(name==='characters')
      setUserResp({...userResp, characters : e.target.value})
    }

    useEffect(()=>{
      setTimeout(()=>{
        setShowQuestions(false);
        // console.log(userResp);
        axios.post('http://localhost:5000/api/ppdt_resp', {
        username: 'John',
        url: userResp.url,
        title : userResp.title,
        main_character : userResp.main_character,
        characters: userResp.characters,
        total_characters: userResp.total_characters,
        story: userResp.story
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      },50000)
    })
   
  return (
    <div className='ppdt-con'>
        {showQuestions?
        <div className="question-container">
        <PpdtTimer/>
      <div className='question_form'>
        <form action="submit" method="post">
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Title of the story:</label>
          <input type="text" className='ques_input' name='title' value={userResp.title} onChange={(e)=>handleChange(e,'title')}/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the name of the main character of your story:</label>
          <input type="text" className='ques_input' name='main_character' value={userResp.main_character} onChange={(e)=>handleChange(e,'main_character')}/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the number of characters in your story:</label>
          <input type="number" className='ques_input' name='total_characters' value={userResp.total_characters} onChange={(e)=>handleChange(e,'total_characters')} />
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Enter the name, age ,sex , mood of the all characters of your story:</label>
          <textarea type="text" className='ques_input' name='characters' value={userResp.characters} onChange={(e)=>handleChange(e,'characters')}/>
          </div>
          <div className='ques_form'>
          <label className='ques_label' htmlFor="">Write your story here:</label>
          <textarea type="text" className='ques_input' name='story' value={userResp.story} onChange={(e)=>handleChange(e,'story')}/>
          </div>
        </form>
    </div>
    </div>
    :
    <div className='ques_submit'>
        <h1>Your response has been submitted.</h1>
        <div className='ques_link'>
        <Link className='ques_dash' to="/dashboard">Click here to go to dashboard</Link> <br /> <br />
        <Link className='ques_dash' to="/ppdt_intro">Try another PPDT test</Link>
        </div>
    </div>
        }
    </div>
  )
}

