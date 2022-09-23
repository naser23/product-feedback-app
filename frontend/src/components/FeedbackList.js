import React, { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestions } from "../features/feedback/feedbackSlice";
import { reset } from "../features/feedback/feedbackSlice";

function FeedbackList() {
  const { suggestions, isLoading, isSuccess } = useSelector(
    (state) => state.feedback
  );

  const dispatch = useDispatch();

  // trying to make something happen on unmount.
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    // make the request for the tickets.
    dispatch(getSuggestions());

    // WHY THE FUCK IS THIS NOT RUNNING
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
