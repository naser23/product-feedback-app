import React from "react";
import UpvoteIcon from "../assets/shared/icon-arrow-up.svg";
import CommentBubble from "../assets/shared/icon-comments.svg";

function FeedbackItem() {
  return (
    <div className="feedbackItem">
      <div className="upvotes">
        <img src={UpvoteIcon} alt="UpvoteIcon" />
        <p className="fontRegular">0</p>
      </div>
      <div className="feedbackText">
        <h3 className="fontSemiBold">Suggestion Name</h3>
        <p className="fontRegular feedbackDescription">
          This is the suggestion text.
        </p>
        <p className="feedbackCategory fontSemiBold">Enhancement</p>
      </div>
      <div className="commentCount">
        <img src={CommentBubble} alt="CommentBubble" />
        <p className="fontSemiBold">2</p>
      </div>
    </div>
  );
}

export default FeedbackItem;
