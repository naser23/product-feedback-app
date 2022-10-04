import React from "react";
import { useState } from "react";

function CategoryArea() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const [feedbackCategory, setFeedbackCategory] = useState("");
  const [isActive, setIsActive] = useState(false);

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
            onClick={() => setFeedbackCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>
    </section>
  );
}

export default CategoryArea;
