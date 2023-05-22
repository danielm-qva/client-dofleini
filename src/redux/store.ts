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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch