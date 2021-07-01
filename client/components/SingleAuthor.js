import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthor } from "../store/singleAuthor";
import StoriesList from "./StoriesList";
import Comments from "./Comments";
import AuthorDetails from "./AuthorDetails";

const SingleAuthor = (props) => {
  const dispatch = useDispatch();
  const authorId = props.match.params.authorId;
  const stories = props.stories;

  useEffect(() => {
    dispatch(fetchAuthor(authorId));
  });

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
};

export default SingleAuthor;
