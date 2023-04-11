import React,{useState,useEffect} from 'react'
import '../css/quiz_verbal.css'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { useSelector } from 'react-redux'

export default function Ques_verbal({onChecked}) {

    const [checked,setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQuestion()

    const questions = useSelector(state=>state.questions.queue[state.questions.trace])

    useEffect(()=>{
        // console.log(questions)
    })

    function onSelect(i){
        onChecked(i)
    }

    if(isLoading) return <h3 className='text-dark'>isLoading</h3>
    if(serverError) return <h3 className='text-dark'>{serverError || "Unknown Error"}</h3>

  return (
    <div className='questions'>
        <h2 className='text-dark'>{questions?.question}</h2>
        <ul key={questions?.id}>
            {
                questions?.options.map((q,i)=>(
                    <li key={i}>
                        <input type="radio" 
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                        />
                <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                <div className='check'></div>
            </li>
                ))
            }
        </ul>
    </div>
  )
}
