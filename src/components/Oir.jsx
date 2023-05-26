import React,{useRef} from 'react'
import '../css/oir.css'
import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'

export default function Oir() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
  return (
    <>
        <h1 className='heading'>OIR Mock Test</h1>
        <hr />
        <h2 className='inst'>Please read the instructions carefully: </h2>
        <div className="oir_test">
            <div className="non_verbal">
                <h3 className="non_ver_head">OIR Non-Verbal Reasoning (CDS Category) : Mock Test</h3>
                <h4>1. The question paper has -</h4>
                <h4>i. Number of Questions - 40</h4>
                <h4>ii. Maximum Marks - 40</h4>
                <h4>iii. Total Time - 17 Minute</h4>
                <h4>2. Choose the most appropriate answer and select the options (A, B, C or D). Selecting more than one option is not permitted.</h4>
                <h4>3. Each question carries one marks.</h4>
                <h4>4. There is no negative marking.</h4>
                <h4>5. No marks will be deducted for un-attempted questions.</h4>
                <h4>6. Answer all the questions.</h4>
            </div>

            <div className="verbal">
                <h3 className="ver_head">OIR Verbal Reasoning (CDS Category) : Mock Test</h3>
                <h4>1. The question paper has -</h4>
                <h4>i. Number of Questions - 40</h4>
                <h4>ii. Maximum Marks - 40</h4>
                <h4>iii. Total Time - 17 Minute</h4>
                <h4>2. Choose the most appropriate answer and select the options (A, B, C or D). Selecting more than one option is not permitted.</h4>
                <h4>3. Each question carries one marks.</h4>
                <h4>4. There is no negative marking.</h4>
                <h4>5. No marks will be deducted for un-attempted questions.</h4>
                <h4>6. Answer all the questions.</h4>
            </div>
        </div>

        <form id='form'>
            <input type="text" ref={inputRef} placeholder="Username"/>
        </form>

        <div className="btn_grid">
            <NavLink to="/nonverbal" className="btn_non">
                Non-Verbal Test
            </NavLink>
            
            <NavLink to="/verbal" onClick={startQuiz} className="btn_ver">
                Verbal Test
            </NavLink>
            
        </div>
    </>
  )
}
