import React from 'react'
import '../css/res_ver.css'
import { NavLink } from "react-router-dom"
import ResulttableVer from './ResultTable_ver'
import { useDispatch } from 'react-redux'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'

export default function Result_ver() {

    const dispatch = useDispatch()
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
  return (
    <div className='container'>
        <h1 className="text-dark">Quiz Application</h1>
        <div className="result flex-center">
            <div className="flex">
                <span>Total Quiz points</span>
                <span className='bold'>50</span>
            </div>
            <div className="flex">
                <span>Total Questions</span>
                <span className='bold'>50</span>
            </div>
            <div className="flex">
                <span>Total Attempts</span>
                <span className='bold'>50</span>
            </div>
            <div className="flex">
                <span>Total Earn points</span>
                <span className='bold'>50</span>
            </div>
            <div className="flex">
                <span>Result</span>
                <span className='bold'>50</span>
            </div>
        </div>
        <div className="start">
            <NavLink className='btn3' to={'/oir'} onClick={onRestart}>Restart</NavLink>
        </div>

        <div className="container">
                <ResulttableVer />
        </div>
    </div>
  )
}
