import {combineReducers,configureStore} from '@reduxjs/toolkit'
import questionReducer from './question_reducer'
import resultReducer from './result_reducer'
import srt_ques_reducer from './srt_ques_reducer'

const rootReducer = combineReducers({
    questions: questionReducer,
    srtquestions: srt_ques_reducer,
    result: resultReducer
})

export default configureStore({ reducer:rootReducer})