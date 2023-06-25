import React, { useEffect, useState } from 'react'
import '../css/verbal.css'
import Questions from './Ques_verbal'
import { moveNextQuestion } from '../hooks/FetchQuestion'
import { movePrevQuestion } from '../hooks/FetchQuestion'
import {useSelector,useDispatch} from 'react-redux'
import { PushAnswer } from '../hooks/setResult'
import {Navigate} from 'react-router-dom'
import PpdtTimer from '../components/Ppdt/PpdtTimer'
import Result_ver from './Result_ver'

export default function Verbal() {
  const [showQuestions, setShowQuestions] = useState(true);
    setTimeout(()=>{
        setShowQuestions(false);
    },10000)
  const [check,setChecked] = useState(undefined)
  const result = useSelector(state => state.result.result)
  const {queue,trace} = useSelector(state => state.questions)
  const dispatch = useDispatch()

  useEffect(()=>{
    // console.log(state);
  })

  function onPrev(){
    console.log("previous")
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
      
      if(result.length<=trace){
        dispatch(PushAnswer(check))
      }
    }
    setChecked(undefined)
    
  }

  if(result.length && result.length>=queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    showQuestions?

    <div className='cont'>
      
      <div>
      <h1 className='oir-head'>OIR Verbal Reasoning: Mock Test</h1>
      
      <Questions onChecked={onChecked} className='ques'/>
      <div className='btn_grid1'>
      { trace > 0 ? <button className='btn2 prev' onClick={onPrev}>prev</button> : <div></div>}
        <button className='next btn2' onClick={onNext}>next</button>
      </div>
      </div>
      <PpdtTimer />
    </div>
    :
    <Result_ver />
  )
}
