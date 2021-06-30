import React from "react";
import { Link } from "react-router-dom";

const Authors = (props) => {
  const authors = props.authors;
  return (
    <div>
      {authors.map((author) => (
        <Link to={`/authors/${author.id}`} key={author.id}>
          <div className="author row">
            <img src={author.imgUrl} />
            <p>{author.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Authors;
