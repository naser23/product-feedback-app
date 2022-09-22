import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSuggestion, reset } from "../features/feedback/feedbackSlice";
import { toast } from "react-toastify";

function AddFeedback() {
  const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"];

  const [formData, setFormData] = useState({
    title: "",
    category: "UI",
    feedbackDetail: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.feedback
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, isLoading, message]);

  const { title, category, feedbackDetail } = formData;

  function onSubmit(e) {
    e.preventDefault();

    if (!title || !category || !feedbackDetail) {
      toast.error("Please include all fields");
    } else {
      const newSuggestion = {
        title,
        category,
        feedbackDetail,
      };
      dispatch(createSuggestion(newSuggestion));
      console.log(newSuggestion);
    }
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
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
            <input type="text" id="title" value={title} onChange={onChange} />
          </div>
          <div className="form-group">
            <label>
              <h3 className="fontSemiBold">Category</h3>
              <p className="fontRegular gray-text">
                Choose a category for your feedback
              </p>
            </label>
            <select
              className="fontRegular"
              name="category"
              id="category"
              value={category}
              onChange={onChange}
            >
              {categories.map((category) => (
                <option
                  key={categories.indexOf(category)}
                  id={category}
                  value={category}
                >
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
              value={feedbackDetail}
              onChange={onChange}
              rows="5"
            ></textarea>
          </div>

          <div className="formButtons">
            <button
              onClick={onSubmit}
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
