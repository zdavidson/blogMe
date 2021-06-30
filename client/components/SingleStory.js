import { Component } from "react";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import Comments from "./Comments";

const SingleStory = (props) => {
  const [story, setStory] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const storyId = props.match.params.storyId;

  useEffect(() => {
    async function fetchStory() {
      await fetch(`/api/stories/${storyId}`)
        .then((res) => res.json())
        .then((result) => {
          setStory(result);
          setIsLoaded(true);
        });
    }
    fetchStory();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const storyComments = story.comments;
    const split = story.content.split("\n");
    return (
      <div id="single-story" className="column">
        <h1>{story.title}</h1>
        {split.map((line) => {
          return <p key={line.length - 1}>{line}</p>;
        })}
        <h3>Responses:</h3>
        <Comments storyComments={storyComments} />
      </div>
    );
  }
};

export default SingleStory;
