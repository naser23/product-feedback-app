import React from "react";
import IllustrationEmpty from "../assets/suggestions/illustration-empty.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/feedback/feedbackSlice";

function NoSuggestions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function resetAndNavigate() {
    dispatch(reset());
    navigate("/add-feedback");
  }

  return (
    <section className="noFeedbackContainer">
      <div className="noFeedback">
        <img src={IllustrationEmpty} alt="No suggestions" />
        <h1 className="noFeedbackHeader fontSemiBold">
          There is no feedback yet
        </h1>
        <p className="noFeedbackText fontRegular">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button onClick={resetAndNavigate} className="addFeedback fontSemiBold">
          + Add Feedback
        </button>
      </div>
    </section>
  );
}

export default NoSuggestions;
