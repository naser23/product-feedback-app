import React from "react";
import { useState } from "react";
import UpvoteIcon from "../assets/shared/icon-arrow-up.svg";
import CommentBubble from "../assets/shared/icon-comments.svg";
import { changeUpvoteCount, reset } from "../features/feedback/feedbackSlice";
import { useSelector, useDispatch } from "react-redux";

function FeedbackItem({ item }) {
  const { category, description, title, upvotes } = item;

  const [isActive, setIsActive] = useState(false);

  function updateItem(item) {
    setIsActive(!isActive);
    console.log(item);
  }

  return (
    <div className="feedbackItem">
      <div
        className={isActive ? "active-upvotes" : "upvotes"}
        onClick={() => !isActive && updateItem(item)}
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
  );
}

export default FeedbackItem;
