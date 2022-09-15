import React from "react";

function Roadmap() {
  return (
    <section className="roadmapArea">
      <div className="roadmapHeader">
        <h3>Roadmap</h3>
        <p>View</p>
      </div>

      <div className="roadmapProgress">
        <ul className="options">
          <li className="option">
            <p>
              <span className="peachDot"></span> Planned
            </p>
            <span className="optionCount">2</span>
          </li>
          <li className="option">
            <p>
              <span className="purpleDot"></span>In-Progress
            </p>
            <span className="optionCount">3</span>
          </li>
          <li className="option">
            <p>
              <span className="blueDot"></span>Live
            </p>
            <span className="optionCount">1</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Roadmap;
