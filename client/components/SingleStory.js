import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import Comments from "./Comments";

class SingleStory extends Component {
  constructor() {
    super();
  }
  render() {
    const fakeStory = {
      title: "Ships",
      id: 2,
      content:
        "A ship in port is safe,\nbut that's not what ships are built for",
      author: {
        id: 1,
        name: "Grace Hopper",
      },
      comments: [
        {
          id: 4,
          content: "I like ships!",
          author: {
            id: 2,
            name: "Alan Turing",
            imageUrl: "default-author.png",
          },
        },
      ],
    };
    const storyComments = fakeStory.comments;
    const split = fakeStory.content.split("\n");

    return (
      <div id="single-story" className="column">
        <h1>{fakeStory.title}</h1>
        {split.map((line) => {
          return <p key={line.length - 1}>{line}</p>;
        })}
        <h3>Responses:</h3>
        <Comments storyComments={storyComments} />
      </div>
    );
  }
}

export default SingleStory;
