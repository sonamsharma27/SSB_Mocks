import {combineReducers,configureStore} from '@reduxjs/toolkit'
import questionReducer from './question_reducer'
import resultReducer from './result_reducer'
// import nonQuestionReducer from './non_question_reducer'
// import nonResultReducer from './non_result_reducer'

const rootReducer = combineReducers({
    questions: questionReducer,
    // nonquestions: nonQuestionReducer,
    result: resultReducer
    // nonresult: nonResultReducer
})

export default configureStore({ reducer:rootReducer})