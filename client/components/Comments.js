import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const Comments = (props) => {
  const [comments, setComments] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const authorId = props.authorId;

  useEffect(() => {
    async function fetchComments() {
      await fetch(`/api/authors/${authorId}/comments`)
        .then((res) => res.json())
        .then((result) => {
          setComments(result);
          setIsLoaded(true);
        });
    }
    fetchComments();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <div id="comments">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    );
  }
};

export default Comments;
