
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import { SignIn } from "../api/services";
const user = localStorage.getItem("user");

export const login = createAsyncThunk(
  "auth/login",
  async ({ phone, password }, thunkAPI) => {
    try {
      const data = await SignIn(phone, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {

    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },

  },
});
const { reducer } = authSlice;
export default reducer;