import React, { useState, useEffect } from "react";
import { fetchStoryComments } from "../store/comments";
import { useSelector, useDispatch } from "react-redux";
import Comment from "./Comment";

const Comments = (props) => {
  const dispatch = useDispatch();
  const storyId = props.storyId;

  useEffect(() => {
    dispatch(fetchStoryComments(storyId));
  }, []);

  const comments = useSelector((state) => state.comments);

  return (
    <div id="comments">
      <div></div>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
