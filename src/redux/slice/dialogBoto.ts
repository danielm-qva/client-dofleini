import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSurvey:[],
     isopen: false,
     isOpenAddDialog: false
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
       }
   }
     
})

export const {open , hidden,openAddDialog , openAddDialogNot} = dialogSlice.actions;

export default dialogSlice.reducer


