import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getSuggestionsOfCategory,
  getSuggestions,
} from "../features/feedback/feedbackSlice";
import { Link } from "react-router-dom";
import RoadmapPage from "../pages/RoadmapPage";

function MobileNav() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const [feedbackCategory, setFeedbackCategory] = useState("All");
  const dispatch = useDispatch();

  function categoryFilter(category) {
    // this is not updating in time
    setFeedbackCategory(category);
    dispatch(getSuggestionsOfCategory(category));

    // dispatch(reset());
  }

  return (
    <nav className="mobileNav">
      <section className="categoryAreaMobile">
        <div className="categoriesMobile">
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
      <section className="roadmapAreaMobile">
        <div className="roadmapHeaderMobile">
          <h3>Roadmap</h3>
          <Link to="/roadmap" element={<RoadmapPage />}>
            View
          </Link>
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
