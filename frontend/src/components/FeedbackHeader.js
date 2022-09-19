import React from "react";

function FeedbackHeader() {
  const sortingOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <div className="feedbackHeader">
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
      <button className="addFeedback fontSemiBold">+ Add Feedback</button>
    </div>
  );
}

export default FeedbackHeader;
