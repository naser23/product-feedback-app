import React from "react";
import LeftArrow from "../assets/shared/icon-arrow-left.svg";
import UpvoteIcon from "../assets/shared/icon-arrow-up.svg";
import CommentList from "../components/CommentList";
import CommentBubble from "../assets/shared/icon-comments.svg";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestion } from "../features/feedback/feedbackSlice";
import { toast } from "react-toastify";

function Suggestion() {
  const { suggestion, isError, message } = useSelector(
    (state) => state.feedback
  );

  const { title, category, description, upvotes } = suggestion;

  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  function updateItem(item) {
    setIsActive(!isActive);
    // dispatch(changeUpvoteCount(item._id));
  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getSuggestion(id));
  }, [dispatch, isError, id, message]);

  return (
    <main className="feedbackDetails">
      <header className="topButtons">
        <button className="goBack fontSemiBold" onClick={() => navigate("/")}>
          <img src={LeftArrow} alt="Go back" />
          Go Back
        </button>

        <button
          className="editFeedback fontSemiBold"
          onClick={() => navigate(`/${id}/add-comment`)}
        >
          Add Comment
        </button>
      </header>

      <div className="feedbackPageItem">
        <div
          className={isActive ? "active-upvotes" : "upvotes"}
          onClick={() => !isActive && updateItem()}
        >
          <img
            src={UpvoteIcon}
            alt="UpvoteIcon"
            className={isActive ? "active-upvotes-img" : ""}
          />
          <p className="fontRegular">{upvotes}</p>
        </div>
        <div className="feedbackText">
          <h3 className="fontSemiBold">{title}</h3>
          <p className="fontRegular feedbackDescription">{description}</p>
          <p className="feedbackCategory fontSemiBold">{category}</p>
        </div>
        <div className="commentCount">
          <img src={CommentBubble} alt="CommentBubble" />
          <p className="fontSemiBold">2</p>
        </div>
      </div>

      <CommentList />
    </main>
  );
}

export default Suggestion;
