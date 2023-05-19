import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSurvey:[],
     isopen: false,
}

export const dialogSlice = createSlice({
   name: 'dialog',
   initialState,
   reducers: {
    open: (state) => {
        state.isopen = true
    },
    hidden: (state) => {
        state.isopen = false
    }
   }
     
})

export const {open , hidden} = dialogSlice.actions;

export default dialogSlice.reducer


