import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      statusLogin: false,
       user: {},
       token: "",
       isLoading: false,
}

export const loginSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    applogin: (state ,actions) => {
      state.statusLogin = true;
      state.user = actions.payload.user;
      state.token = actions.payload.token
    },
    applogout: (state) => {
      state.statusLogin = false;
      state.user= {},
      state.token =""
    },
    isLoading: (state) => {
      state.isLoading = true
    },
   notisLoading: (state) => {
      state.isLoading = false
    }
  },
});

export const { applogin, applogout , isLoading , notisLoading } = loginSlice.actions;

export default loginSlice.reducer ;
