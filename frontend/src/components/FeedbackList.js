import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useSelector } from "react-redux";

function FeedbackList() {
  const { suggestions } = useSelector((state) => state.feedback);
  return (
    <section className="feedbackList">
      {suggestions.map((item) => (
        <FeedbackItem key={suggestions.indexOf(item)} item={item} />
      ))}
    </section>
  );
}

export default FeedbackList;
