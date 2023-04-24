import React from 'react'
import '../css/res_ver.css'
import { NavLink } from "react-router-dom"
import ResulttableVer from './ResultTable_ver'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { attempts_Number,earnPoints_Number,flagResult } from '../helper/helper'
import { usePublishResult } from '../hooks/setResult'

export default function Result_ver() {

    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)

    usePublishResult({
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed"
    })
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
  return (
    <div className='container'>
        <h1 className="text-dark">Quiz Application</h1>
        <div className="result flex-center">
        <div className="flex">
                <span>UserName</span>
                <span className='bold'>{userId || 0}</span>
            </div>
            <div className="flex">
                <span>Total Quiz points</span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className="flex">
                <span>Total Questions</span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
            <div className="flex">
                <span>Total Attempts</span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className="flex">
                <span>Total Earn points</span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className="flex">
                <span>Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
        </div>
        <div className="start">
            <NavLink className='btn3' to={'/oir'} onClick={onRestart}>Restart</NavLink>
        </div>

        <div className="container">
                <ResulttableVer attempts={attempts} earnPoints={earnPoints} flag={flag ? "Passed" : "Failed"} userId={userId}/>
        </div>
    </div>
  )
}