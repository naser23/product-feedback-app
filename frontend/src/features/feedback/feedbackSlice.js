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

const API_URL = "/api/feedback/";
const ADD_FEEDBACK_URL = "/api/feedback/add-feedback";

// Creating new suggestion
export const createSuggestion = createAsyncThunk(
  "feedback/add-feedback",
  async (suggestionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        ADD_FEEDBACK_URL,
        suggestionData,
        config
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Getting All suggestions
export const getSuggestions = createAsyncThunk(
  "feedback/get-all",
  async (suggestionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(API_URL, config);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get singular suggestion
export const getSuggestion = createAsyncThunk(
  "feedback/get-suggestion",
  async (suggestionId, thunkAPI) => {
    try {
      console.log(suggestionId);
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(API_URL + suggestionId, config);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Change upvote count
export const changeUpvoteCount = createAsyncThunk(
  "feedback/upvote-count",
  async (suggestionId, thunkAPI) => {
    // find current suggestion
    // see if user liked suggestion already
    // increase upvote count by 1
    // try {
    //   const token = thunkAPI.getState().auth.user.token;
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //   const response = await axios.put(
    //     API_URL + suggestionId,
    //     { upvotes: 1 },
    //     config
    //   );
    //   return response.data;
    // } catch (error) {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();
    //   return thunkAPI.rejectWithValue(message);
    // }
    // make put request to update the upvote count
  }
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
      })
      // Reducers for changing upvote count
      .addCase(changeUpvoteCount.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.suggestions.map((suggestion) =>
        //   // find the suggestion using the _id and increase the upvotes by 1
        //   suggestion._id === action.payload._id
        //     ? suggestion.upvotes + 1
        //     : suggestion
        // );
      });
  },
});

export const { reset } = feedbackSlice.actions;
export default feedbackSlice.reducer;
