import React from "react";
import { useSelector } from "react-redux";

const AuthorDetails = () => {
  const author = useSelector((state) => state.author);

  return (
    <div id="single-author-detail" className="row">
      <div className="column mr1">
        <h1>{author.name}</h1>
        <p>{author.bio}</p>
      </div>
      <img src={author.imageUrl} />
    </div>
  );
};

export default AuthorDetails;
