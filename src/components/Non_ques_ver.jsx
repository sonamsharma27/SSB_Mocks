import React,{useState,useEffect} from 'react'
import '../css/non_quiz.css'
import { useNonFetchQuestion } from '../hooks/NonFetchQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../hooks/setResult'

export default function Non_ques_ver({onChecked}) {

    const [checked,setChecked] = useState(undefined)
    const {trace} = useSelector(state=>state.questions)
    const result = useSelector(state=>state.result.result)
    const [{ isLoading, apiData, serverError}] = useNonFetchQuestion()

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
        <img src={questions?.figure} alt="" srcset="" className='nonimage'/>
        <ul key={questions?.id} className='ques_list_non'>
            {
                questions?.options.map((q,i)=>(
                    <li key={i}>
                        <input type="radio" 
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                        />
                <label className='text-light labelclass' htmlFor={`q${i}-option`}><img className='optionimage' src={q} alt='images'/></label>
                <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
            </li>
                ))
            }
        </ul>
    </div>
  )
}