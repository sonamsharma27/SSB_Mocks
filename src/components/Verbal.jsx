import React, { useEffect, useState } from 'react'
import '../css/verbal.css'
import Questions from './Ques_verbal'
import { moveNextQuestion } from '../hooks/FetchQuestion'
import { movePrevQuestion } from '../hooks/FetchQuestion'
import {useSelector,useDispatch} from 'react-redux'
import { PushAnswer } from '../hooks/setResult'
import {Navigate} from 'react-router-dom'

export default function Verbal() {
  const [check,setChecked] = useState(undefined)
  const result = useSelector(state => state.result.result)
  const {queue,trace} = useSelector(state => state.questions)
  const dispatch = useDispatch()

  useEffect(()=>{
    // console.log(state);
  })

  function onPrev(){
    // console.log("previous")
    if(trace>0){
      dispatch(movePrevQuestion())
    }
    
  }

  function onChecked(check){
    console.log(check);
    setChecked(check)
  }

  function onNext(){
    // console.log("next")
    if(trace<queue.length){
      dispatch(moveNextQuestion())
      dispatch(PushAnswer(check))
    }
    
  }

  if(result.length && result.length>=queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <div className='cont'>
      <h1>OIR Verbal Reasoning: Mock Test</h1>
      <Questions onChecked={onChecked}/>
      <div className='btn_grid1'>
        <button className='prev btn2' onClick={onPrev}>Prev</button>
        <button className='next btn2' onClick={onNext}>next</button>
      </div>
    </div>
  )
}
