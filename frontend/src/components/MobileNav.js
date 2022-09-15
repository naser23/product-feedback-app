import React from "react";

function MobileNav() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <nav className="mobileNav">
      <section className="categoryAreaMobile">
        <div className="categoriesMobile">
          {categories.map((category) => (
            <p className="categoryMobile" key={categories.indexOf(category)}>
              {category}
            </p>
          ))}
        </div>
      </section>
      <section className="roadmapAreaMobile">RoadMap</section>
    </nav>
  );
}

export default MobileNav;
