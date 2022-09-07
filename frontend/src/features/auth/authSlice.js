import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const API_URL = "/api/users/";
const LOGIN_URL = "/api/users/login";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    // const response = await axios.post(API_URL, user)
    console.log(user);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
