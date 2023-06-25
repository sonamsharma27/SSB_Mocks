import React,{useState,useEffect} from 'react'
import '../css/quiz_verbal.css'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../hooks/setResult'

export default function Ques_verbal({onChecked}) {

    const [checked,setChecked] = useState(undefined)
    const {trace} = useSelector(state=>state.questions)
    const result = useSelector(state=>state.result.result)
    const [{ isLoading, apiData, serverError}] = useFetchQuestion()

    const questions = useSelector(state=>state.questions.queue[state.questions.trace])

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(updateResult({trace,checked}))
    },[checked])

    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace,checked}))
    }

    if(isLoading) return <h3 className='text-dark'>isLoading</h3>
    if(serverError) return <h3 className='text-dark'>{serverError || "Unknown Error"}</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>
        <ul key={questions?.id} className='ques_list'>
            {
                questions?.options.map((q,i)=>(
                    <li key={i} className='quiz_stage_list'>
                        <input type="radio" 
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                        />
                <label className='text-light' htmlFor={`q${i}-option`}>{q}</label>
                <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
            </li>
                ))
            }
        </ul>
    </div>
  )
}