<<<<<<< HEAD
import {createSlice} from '@reduxjs/toolkit'
export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers : {
        startExamAction : (state,action) => {
            let {question,answers} = action.payload
            return {
                ...state,
                queue: question,
                answers
            }
        },
        moveNextAction: (state) => {
            return{
                ...state,
                trace: state.trace+1
            }
        },
        movePrevAction: (state) => {
            return{
                ...state,
                trace: state.trace-1
            }
        },
        resetAllAction: () => {
            return{
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})

export const {startExamAction,moveNextAction,movePrevAction,resetAllAction} = questionReducer.actions

=======
import {createSlice} from '@reduxjs/toolkit'
export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers : {
        startExamAction : (state,action) => {
            let {question,answers} = action.payload
            return {
                ...state,
                queue: question,
                answers
            }
        },
        moveNextAction: (state) => {
            return{
                ...state,
                trace: state.trace+1
            }
        },
        movePrevAction: (state) => {
            return{
                ...state,
                trace: state.trace-1
            }
        },
        resetAllAction: () => {
            return{
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})

export const {startExamAction,moveNextAction,movePrevAction,resetAllAction} = questionReducer.actions

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
export default questionReducer.reducer