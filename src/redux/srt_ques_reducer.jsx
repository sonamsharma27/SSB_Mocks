<<<<<<< HEAD
import {createSlice} from '@reduxjs/toolkit'

export const questionReducer = createSlice({
    name: 'srtquestions',
    initialState: {
        queue: [],
        trace: 0
    },
    reducers : {
        startExamAction : (state,action) => {
            let {question} = action.payload
            return {
                ...state,
                queue: question
            }
        }
    }
})

export const {startExamAction} = questionReducer.actions

=======
import {createSlice} from '@reduxjs/toolkit'

export const questionReducer = createSlice({
    name: 'srtquestions',
    initialState: {
        queue: [],
        trace: 0
    },
    reducers : {
        startExamAction : (state,action) => {
            let {question} = action.payload
            return {
                ...state,
                queue: question
            }
        }
    }
})

export const {startExamAction} = questionReducer.actions

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
export default questionReducer.reducer