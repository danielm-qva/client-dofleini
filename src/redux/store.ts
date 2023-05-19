import { configureStore } from "@reduxjs/toolkit";
import  loginSlice from "./slice/sliceApp";
import ListSurveySlice  from "./slice/sliceListSurvey";
import dialogSlice  from "./slice/dialogBoto";


export const store = configureStore({
    reducer: {
       app: loginSlice, 
       surveyL: ListSurveySlice,
       dialog: dialogSlice
    }
})