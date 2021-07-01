import React from "react";
import { connect } from "react-redux";

const AuthorDetails = (props) => {
  const author = props.author;

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

const mapStateToProps = (state) => {
  return {
    author: state.author,
  };
};

export default connect(mapStateToProps)(AuthorDetails);
