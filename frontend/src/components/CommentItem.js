import React from "react";
import { CgProfile } from "react-icons/cg";

function CommentItem({ comment }) {
  return (
    <div className="commentItem">
      <div className="commentsHeader">
        <CgProfile className="profilePicture" />
        <span className="nameText">
          <h4 className="fontSemiBold">{comment.name}</h4>
          <p className="username fontRegular">{comment.username}</p>
        </span>
        <button className="reply fontSemiBold">Reply</button>
      </div>
      <p className="commentText fontRegular">{comment.text}</p>
      <span className="grayLineBreak"></span>
    </div>
  );
}

export default CommentItem;
