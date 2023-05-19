import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSurvey:[],
     isLoading: false,
     detailSurvey: {}
}

export const ListSurveySlice = createSlice({
   name: 'ListSurvey',
   initialState,
   reducers: {
    addlist: (state , action) => {
        state.listSurvey = action.payload.list
    },
    removelist: (state) => {
        state.listSurvey = []
    },
    addDetailSurvey: (state, action) => {
      state.detailSurvey = action.payload.detailSurvey
    },
    deleteDetailSurvey: (state) => {
        state.detailSurvey = {}
    }
   }
})

export const {addlist, removelist , addDetailSurvey, deleteDetailSurvey} = ListSurveySlice.actions;

export default ListSurveySlice.reducer


