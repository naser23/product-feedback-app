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

  useEffect(() => {
    // make the request for the tickets.
    dispatch(getSuggestions());

    // trying to make something happen on unmount.
    // WHY THE FUCK IS THIS NOT RUNNING
    // Come back to this later on
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
