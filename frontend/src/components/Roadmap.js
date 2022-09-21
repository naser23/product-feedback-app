import React from "react";
import { Link } from "react-router-dom";

function Roadmap() {
  return (
    <section className="roadmapArea">
      <div className="roadmapHeader">
        <h3>Roadmap</h3>
        <Link to="/roadmap">View</Link>
      </div>

      <div className="roadmapProgress">
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
  );
}

export default Roadmap;
