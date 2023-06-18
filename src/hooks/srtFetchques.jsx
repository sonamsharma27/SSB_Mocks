<<<<<<< HEAD
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import * as Action from '../redux/srt_ques_reducer'
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading : true}));

        (async () =>{
            try {
                const [{questions}] = await getServerData('http://localhost:5000/api/srt',(data) => data)
                console.log({questions});

                if(questions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}))
                    setGetData(prev=>({...prev,apiData:{questions}}))

                    dispatch(Action.startExamAction({question : questions}))
                }else{
                    throw new Error("No Question Available")
                }
            } catch (error) {
                setGetData(prev=>({...prev,isLoading:false}))
                setGetData(prev=>({...prev,serverError:error}))
            }
        })()
    },[dispatch])

    return [getData,setGetData]
=======
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import * as Action from '../redux/srt_ques_reducer'
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading : true}));

        (async () =>{
            try {
                const [{questions}] = await getServerData('http://localhost:5000/api/srt',(data) => data)
                console.log({questions});

                if(questions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}))
                    setGetData(prev=>({...prev,apiData:{questions}}))

                    dispatch(Action.startExamAction({question : questions}))
                }else{
                    throw new Error("No Question Available")
                }
            } catch (error) {
                setGetData(prev=>({...prev,isLoading:false}))
                setGetData(prev=>({...prev,serverError:error}))
            }
        })()
    },[dispatch])

    return [getData,setGetData]
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
}