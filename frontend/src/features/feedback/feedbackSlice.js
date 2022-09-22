import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  suggestions: [],
  suggestion: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Creating new suggestion
export const createSuggestion = createAsyncThunk(
  "feedback/add-feedback",
  async (suggestionData, thunkAPI) => {}
);

// Getting All suggestions
export const getSuggestions = createAsyncThunk(
  "feedback/get-all",
  async (suggestionData, thunkAPI) => {}
);

// Get singular suggestion
export const getSuggestion = createAsyncThunk(
  "feedback/get-suggestion",
  async (suggestionData, thunkAPI) => {}
);

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Reducers for creating ticket
      .addCase(createSuggestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSuggestion.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createSuggestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Reducers for getting all tickets
      .addCase(getSuggestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSuggestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.suggestions = action.payload;
      })
      .addCase(getSuggestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Reducers for getting singular ticket
      .addCase(getSuggestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSuggestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.suggestion = action.payload;
      })
      .addCase(getSuggestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = feedbackSlice.actions;
export default feedbackSlice.reducer;
