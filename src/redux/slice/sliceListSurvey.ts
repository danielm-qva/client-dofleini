import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSurvey:[],
     isLoading: false,
}

export const ListSurveySlice = createSlice({
   name: 'ListSurvey',
   initialState,
   reducers: {
    addlist: (state , action) => {
        state.listSurvey = action.payload.list
    }
   }
     
})

export const {addlist} = ListSurveySlice.actions;

export default ListSurveySlice.reducer


