import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getSuggestionsOfCategory,
  getSuggestions,
} from "../features/feedback/feedbackSlice";

function CategoryArea() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const [feedbackCategory, setFeedbackCategory] = useState("All");
  const dispatch = useDispatch();

  function categoryFilter(category) {
    // this is not updating in time
    setFeedbackCategory(category);
    dispatch(getSuggestionsOfCategory(category));

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
            onClick={() =>
              category === "All"
                ? dispatch(getSuggestions())
                : categoryFilter(category)
            }
          >
            {category}
          </p>
        ))}
      </div>
    </section>
  );
}

export default CategoryArea;
