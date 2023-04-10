import React, { useEffect } from 'react'
import '../css/verbal.css'
import Questions from './Ques_verbal'
import {useSelector} from 'react-redux'

export default function Verbal() {

  const state = useSelector(state => state)

  useEffect(()=>{
    console.log(state);
  })

  function onPrev(){
    console.log("previous")
  }

  function onNext(){
    console.log("next")
  }

  return (
    <div className='cont'>
      <h1>OIR Verbal Reasoning: Mock Test</h1>
      <Questions />
      <div className='btn_grid1'>
        <button className='prev btn2' onClick={onPrev}>Prev</button>
        <button className='next btn2' onClick={onNext}>next</button>
      </div>
    </div>
  )
}
