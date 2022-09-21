import React from "react";
import SuggestionIcon from "../assets/suggestions/icon-suggestions.svg";
import { useNavigate } from "react-router-dom";

function FeedbackHeader() {
  const sortingOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const navigate = useNavigate();

  return (
    <div className="feedbackHeader">
      <div className="suggestionCount">
        <img
          className="suggestionIcon"
          src={SuggestionIcon}
          alt="Suggestion Icon"
        />
        <h2 className="suggestionHeader fontBold">0 Suggestions</h2>
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
      <button
        onClick={() => navigate("/add-feedback")}
        className="addFeedback fontSemiBold"
      >
        + Add Feedback
      </button>
    </div>
  );
}

export default FeedbackHeader;
