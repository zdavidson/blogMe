import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
  };
};

export default connect(mapStateToProps)(Authors);
