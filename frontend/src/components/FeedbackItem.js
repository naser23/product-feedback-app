import React from "react";
import UpvoteIcon from "../assets/shared/icon-arrow-up.svg";
import CommentBubble from "../assets/shared/icon-comments.svg";

function FeedbackItem({ item }) {
  const { category, description, title, upvotes } = item;
  return (
    <div className="feedbackItem">
      <div className="upvotes">
        <img src={UpvoteIcon} alt="UpvoteIcon" />
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
