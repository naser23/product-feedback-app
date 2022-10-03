import React from "react";
import CommentItem from "./CommentItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getComments, reset } from "../features/comments/commentSlice";

function CommentList() {
  const { comments, isLoading, isSuccess } = useSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // make request for comments
    dispatch(getComments(id));

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  return (
    <section className="comments">
      <h1 className="commentsCountHeader">{comments.length} comments</h1>
      {comments.map((comment) => (
        <CommentItem key={comments.indexOf(comment)} comment={comment} />
      ))}
    </section>
  );
}

export default CommentList;
