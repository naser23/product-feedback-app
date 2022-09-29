import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import feedbackReducer from "../features/feedback/feedbackSlice";
import commentReducer from "../features/comments/commentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feedback: feedbackReducer,
    comments: commentReducer,
  },
});
