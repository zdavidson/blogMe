import React from "react";
import Comment from "./Comment";

const Comments = (props) => {
  const comments = props.storyComments;
  return (
    <div id="comments">
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
