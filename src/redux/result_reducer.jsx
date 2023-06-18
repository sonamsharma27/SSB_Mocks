<<<<<<< HEAD
import {createSlice} from '@reduxjs/toolkit'

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state,action) =>{
            state.userId = action.payload
        },
        pushResultAction: (state,action) => {
            state.result.push(action.payload)
        },
        updateResultAction: (state,action) => {
            const {trace,checked} = action.payload
            state.result.fill(checked,trace,trace+1)
        },
        resetResultAction: () => {
            return{
                userId: null,
                result: []
            }
        }
    }
})

export const {setUserId,pushResultAction,resetResultAction,updateResultAction} = resultReducer.actions

=======
import {createSlice} from '@reduxjs/toolkit'

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state,action) =>{
            state.userId = action.payload
        },
        pushResultAction: (state,action) => {
            state.result.push(action.payload)
        },
        updateResultAction: (state,action) => {
            const {trace,checked} = action.payload
            state.result.fill(checked,trace,trace+1)
        },
        resetResultAction: () => {
            return{
                userId: null,
                result: []
            }
        }
    }
})

export const {setUserId,pushResultAction,resetResultAction,updateResultAction} = resultReducer.actions

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
export default resultReducer.reducer