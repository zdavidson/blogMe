import React, { useEffect } from "react";
import Navbar from "./Navbar";
import StoriesList from "./StoriesList";
import SingleStory from "./SingleStory";
import Authors from "./Authors";
import SingleAuthor from "./SingleAuthor";
import { useDispatch } from "react-redux";
import { fetchStories } from "../store/stories";
import { fetchAuthors } from "../store/authors";
import { HashRouter as Router, Route } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
    dispatch(fetchAuthors());
  });

  return (
    <Router>
      <div id="main">
        <div className="column container">
          <div id="header">
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <Route exact path="/" component={StoriesList} />
        <Route exact path="/stories" component={StoriesList} />
        <Route exact path="/stories/:storyId" component={SingleStory} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/authors/:authorId" component={SingleAuthor} />
      </div>
    </Router>
  );
};

export default Main;
