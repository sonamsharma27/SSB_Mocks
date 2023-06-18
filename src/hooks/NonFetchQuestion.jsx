import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer'
import { getServerData } from "../helper/helper";

export const useNonFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading : true}));

        (async () =>{
            try {
                const [{nonquestions,nonanswers}] = await getServerData('http://localhost:5000/api/nonquestions',(data) => data)
                console.log({nonquestions,nonanswers});

                if(nonquestions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}))
                    setGetData(prev=>({...prev,apiData:{nonquestions}}))

                    dispatch(Action.startExamAction({question : nonquestions,nonanswers}))
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
}

export const moveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error);
    }
}
export const movePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error);
    }
}