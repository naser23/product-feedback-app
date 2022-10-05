import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getSuggestionsOfCategory,
  getSuggestions,
  reset,
} from "../features/feedback/feedbackSlice";

function CategoryArea() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const [feedbackCategory, setFeedbackCategory] = useState("All");
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  function categoryFilter(category) {
    setFeedbackCategory(category);

    if (feedbackCategory === "All") {
      dispatch(getSuggestions());
    } else {
      dispatch(getSuggestionsOfCategory(category));
    }
    // dispatch(reset());
  }
  // get all the suggestions that match feedback category and filter out the rest.

  return (
    <section className="categoryArea">
      <div className="categories">
        {categories.map((category) => (
          <p
            className={
              feedbackCategory !== category
                ? "category fontSemiBold"
                : "active category fontSemiBold"
            }
            key={categories.indexOf(category)}
            onClick={() => categoryFilter(category)}
          >
            {category}
          </p>
        ))}
      </div>
    </section>
  );
}

export default CategoryArea;
