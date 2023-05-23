import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSurvey:[],
     isopen: false,
     isOpenAddDialog: false,
     isclose: false,
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
    },
    openAddDialog: (state) => {
     state.isOpenAddDialog = true
    },
    openAddDialogNot: (state) => {
        state.isOpenAddDialog = false
    },
   isCloseSurvey: (state) => {
     state.isclose = !state.isclose;
   }
   }
     
})

export const {open , hidden,openAddDialog , openAddDialogNot , isCloseSurvey} = dialogSlice.actions;

export default dialogSlice.reducer


