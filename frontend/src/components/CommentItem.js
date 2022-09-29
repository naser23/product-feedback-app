import React from "react";
import { CgProfile } from "react-icons/cg";

function CommentItem() {
  return (
    <div className="commentItem">
      <div className="commentsHeader">
        <CgProfile className="profilePicture" />
        <span className="nameText">
          <h4 className="fontsemiBold">First Last</h4>
          <p className="username fontRegular">@First.Last</p>
        </span>
        <button className="reply fontSemiBold">Reply</button>
      </div>
      <p className="commentText fontRegular">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sed
        veniam praesentium molestiae magnam, dolorum laudantium numquam possimus
        commodi sapiente quam temporibus ipsam qui atque ipsa eos, facilis quo
        molestias.
      </p>
      <span className="grayLineBreak"></span>
    </div>
  );
}

export default CommentItem;
