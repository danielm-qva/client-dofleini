import { configureStore } from "@reduxjs/toolkit";
import  loginSlice from "./slice/sliceApp";
import ListSurveySlice  from "./slice/sliceListSurvey";


export const store = configureStore({
    reducer: {
       app: loginSlice, 
       surveyL: ListSurveySlice,
    }
})