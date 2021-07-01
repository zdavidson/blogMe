import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStory } from "../store/singleStory";
import Comments from "./Comments";

const SingleStory = (props) => {
  const dispatch = useDispatch();
  const storyId = props.match.params.storyId;

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, []);

  const story = useSelector((state) => state.story);
  return (
    <div id="single-story" className="column">
      <h1>{story.title}</h1>
      <p>{story.content}</p>
      <h3>Responses:</h3>
      <Comments storyId={storyId} />
    </div>
  );
};

export default SingleStory;
