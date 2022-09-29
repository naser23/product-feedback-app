import React from "react";
import CommentItem from "./CommentItem";

function CommentList() {
  return (
    <section className="comments">
      <h1 className="commentsCountHeader">4 Comments</h1>
      <CommentItem />
    </section>
  );
}

export default CommentList;
