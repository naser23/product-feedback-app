import React from "react";
import { useNavigate } from "react-router-dom";

function AddFeedback() {
  const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"];

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="auth">
      <div className="auth-container">
        <form className="form-control" onSubmit={onSubmit}>
          <h2 className="fontBold">Create New Feedback</h2>
          <div className="form-group">
            <label>
              <h3 className="fontSemiBold">Feedback Title</h3>
              <p className="fontRegular gray-text">
                Add a short, descriptive headline
              </p>
            </label>
            <input type="text" id="title" />
          </div>
          <div className="form-group">
            <label>
              <h3 className="fontSemiBold">Category</h3>
              <p className="fontRegular gray-text">
                Choose a category for your feedback
              </p>
            </label>
            <select className="fontRegular" name="category" id="category">
              {categories.map((category) => (
                <option key={categories.indexOf(category)} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>
              <h3 className="fontSemiBold">Feedback Detail</h3>
              <p className="fontRegular gray-text">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </label>
            <textarea
              className="fontRegular"
              name="feedbackDetail"
              id="feedbackDetail"
              rows="5"
            ></textarea>
          </div>

          <div className="formButtons">
            <button
              onClick={() => navigate("/")}
              className="addFeedback formButton fontSemiBold"
            >
              + Add Feedback
            </button>
            <button
              onClick={() => navigate("/")}
              className="cancelButton formButton fontSemiBold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddFeedback;
