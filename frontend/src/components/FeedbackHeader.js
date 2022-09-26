import React from "react";
import SuggestionIcon from "../assets/suggestions/icon-suggestions.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/feedback/feedbackSlice";

function FeedbackHeader() {
  const sortingOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const { suggestions } = useSelector((state) => state.feedback);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function resetAndNavigate() {
    dispatch(reset());
    navigate("/add-feedback");
  }

  return (
    <div className="feedbackHeader">
      <div className="suggestionCount">
        <img
          className="suggestionIcon"
          src={SuggestionIcon}
          alt="Suggestion Icon"
        />
        <h2 className="suggestionHeader fontBold">
          {suggestions.length} Suggestions
        </h2>
      </div>
      <div className="sortBy">
        <label className="fontRegular" htmlFor="feedback ">
          Sort By:
        </label>
        <select className="fontSemiBold" name="feedback" id="sortingOptions">
          {sortingOptions.map((option) => (
            <option key={sortingOptions.indexOf(option)} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={resetAndNavigate} className="addFeedback fontSemiBold">
        + Add Feedback
      </button>
    </div>
  );
}

export default FeedbackHeader;
