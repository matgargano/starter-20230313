import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    incrementBy: 3,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += state.incrementBy;
        },
        decrement: (state) => {
            state.count -= state.incrementBy;
        },
        setIncrementBy: (state, action) => {

            state.incrementBy = parseFloat(action.payload.value);
        }
    }
});




export const {increment, decrement, setIncrementBy} = counterSlice.actions;
export default counterSlice.reducer;