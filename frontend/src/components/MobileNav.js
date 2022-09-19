import React from "react";
import Roadmap from "./Roadmap";

function MobileNav() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <nav className="mobileNav">
      <section className="categoryAreaMobile">
        <div className="categoriesMobile">
          {categories.map((category) => (
            <p
              className="categoryMobile fontSemiBold"
              key={categories.indexOf(category)}
            >
              {category}
            </p>
          ))}
        </div>
      </section>
      <section className="roadmapAreaMobile">
        <div className="roadmapHeaderMobile">
          <h3>Roadmap</h3>
          <p>View</p>
        </div>
        <div className="roadmapProgressMobile">
          <ul className="options">
            <li className="option">
              <div>
                <span className="peachDot"></span>
                <p>Planned</p>
              </div>
              <p className="optionCount">2</p>
            </li>
            <li className="option">
              <div>
                <span className="purpleDot"></span>
                <p>In-Progress</p>
              </div>
              <span className="optionCount">3</span>
            </li>
            <li className="option">
              <div>
                <span className="blueDot"></span>
                <p>Live</p>
              </div>
              <span className="optionCount">1</span>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default MobileNav;
