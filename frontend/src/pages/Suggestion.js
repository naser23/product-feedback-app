import React from "react";
import LeftArrow from "../assets/shared/icon-arrow-left.svg";
import UpvoteIcon from "../assets/shared/icon-arrow-up.svg";
import CommentList from "../components/CommentList";
import CommentBubble from "../assets/shared/icon-comments.svg";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestion } from "../features/feedback/feedbackSlice";
import { createComment, reset } from "../features/comments/commentSlice";
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

  // add Comment functionality
  const [commentText, setCommentText] = useState("");
  const [characterAmount, setCharacterAmount] = useState(250);

  function onTextChange(e) {
    setCommentText(e.currentTarget.value);

    const newCharacters =
      commentText.length > 250 ? 0 : 250 - commentText.length;
    setCharacterAmount(newCharacters);
  }

  function onCommentSubmit(e) {
    e.preventDefault();

    if (!commentText) {
      toast.error("Please include comment text");
    }

    dispatch(createComment(id));
    dispatch(reset());
  }

  /////////////////////////////////////////

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

        <button className="editFeedback fontSemiBold">Edit Feedback</button>
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

      <section className="addCommentSection">
        <form className="addComment" onSubmit={onCommentSubmit}>
          <h3 className="addCommentHeader fontSemiBold">Add Comment</h3>
          <textarea
            className="addCommentText fontRegular"
            name="addComment"
            id="commentText"
            value={commentText}
            onChange={onTextChange}
            placeholder="Type your comment here"
            maxLength={250}
            rows="5"
          ></textarea>
          <div className="addCommentFooter">
            <p className="characterCount fontRegular">
              {characterAmount} Characters left
            </p>
            <button className="postComment fontSemiBold">Post Comment</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Suggestion;
