import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: (builder) => {
    builder
      // .addCase(register.pending, (state) => {
      //   state.isLoggedIn = false;
      // })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      // .addCase(register.rejected, (state) => {
      //   state.isLoggedIn = false;
      // })
      //  pending
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      //  rejected
      //  pending
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      });
    //  rejected
  },
});

export const authReducer = authSlice.reducer;
