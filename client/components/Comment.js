import React from "react";

const Comment = (props) => {
  const comment = props.comment;
  return (
    <div className="comment row">
      <img src={comment.author.imageUrl} />
      <div className="column">
        <a>
          <h5>{comment.author.name}</h5>
        </a>
        <div>{comment.content}</div>
      </div>
    </div>
  );
};

export default Comment;
