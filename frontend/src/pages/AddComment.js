import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createComment, reset } from "../features/comments/commentSlice";

function AddComment() {
  // add Comment functionality
  const [commentText, setCommentText] = useState("");
  const [characterAmount, setCharacterAmount] = useState(250);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  function onTextChange(e) {
    setCommentText(e.target.value);

    const newCharacters =
      commentText.length > 250 ? 0 : 250 - commentText.length;
    setCharacterAmount(newCharacters);
  }

  function onCommentSubmit(e) {
    e.preventDefault();

    if (!commentText) {
      toast.error("Please include comment text");
    }

    dispatch(createComment({ id, commentText }));
    dispatch(reset());
    navigate(`/${id}`);
  }
  return (
    <main className="feedbackDetails">
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

export default AddComment;
