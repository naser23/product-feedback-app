import React from "react";

function CategoryArea() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <section className="categoryArea">
      <div className="categories">
        {categories.map((category) => (
          <p
            className="category fontSemiBold"
            key={categories.indexOf(category)}
          >
            {category}
          </p>
        ))}
      </div>
    </section>
  );
}

export default CategoryArea;
