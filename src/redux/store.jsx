<<<<<<< HEAD
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

=======
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

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
export default configureStore({ reducer:rootReducer})