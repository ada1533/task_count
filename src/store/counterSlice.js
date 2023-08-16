import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter', 
    initialState: {
        counter: 0
    }, 
    reducers:{
        increment: (state, action) => {
            state.counter = state.counter + 1;
        },
        clear: (state, action) => {
            state.counter = state.counter = 0;
        }
    }
})

export const {increment, clear} = counterSlice.actions;
export default counterSlice.reducer;