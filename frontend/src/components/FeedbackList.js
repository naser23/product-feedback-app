import React, { useEffect } from "react";
import FeedbackItem from "./FeedbackItem";
import { useSelector, useDispatch } from "react-redux";
import {
  getSuggestions,
  getSuggestion,
} from "../features/feedback/feedbackSlice";
import { reset } from "../features/feedback/feedbackSlice";

function FeedbackList() {
  const { suggestions, isLoading, isSuccess } = useSelector(
    (state) => state.feedback
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // make the request for the tickets.
    dispatch(getSuggestions());
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  return (
    <section className="feedbackList">
      {suggestions.map((item) => (
        <FeedbackItem key={suggestions.indexOf(item)} item={item} />
      ))}
    </section>
  );
}

export default FeedbackList;
