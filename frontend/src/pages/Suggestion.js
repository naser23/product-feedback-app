import React from "react";
import LeftArrow from "../assets/shared/icon-arrow-left.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestion, reset } from "../features/feedback/feedbackSlice";
import { toast } from "react-toastify";

function Suggestion() {
  const { suggestion, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.feedback
  );

  const dispatch = useDispatch();
  const params = useParams();
  const { id } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getSuggestion(id));
  }, [isError, id, message]);

  return (
    <main className="feedbackDetails">
      <header className="topButtons">
        <button className="goBack fontSemiBold">
          <img src={LeftArrow} alt="Go back" />
          Go Back
        </button>

        <button className="editFeedback fontSemiBold">Edit Feedback</button>
      </header>
    </main>
  );
}

export default Suggestion;
