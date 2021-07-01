import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAuthor } from "../store/singleAuthor";
import StoriesList from "./StoriesList";
import Comments from "./Comments";
import AuthorDetails from "./AuthorDetails";

class SingleAuthor extends React.Component {
  componentDidMount() {
    this.props.loadAuthor(this.props.match.params.authorId);
  }

  render() {
    const stories = this.props.stories;
    const authorId = this.props.match.params.authorId;
    return (
      <div id="single-author" className="column">
        <AuthorDetails />
        <hr />
        <div>
          <h4>STORIES</h4>
          <StoriesList stories={stories} />
          <h4>COMMENTS</h4>
          <Comments authorId={authorId} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAuthor: (authorId) => dispatch(fetchAuthor(authorId)),
  };
};

export default connect(null, mapDispatchToProps)(SingleAuthor);
