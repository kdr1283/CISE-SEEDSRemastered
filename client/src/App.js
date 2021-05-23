/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import ShowArticleList from "./components/ShowArticleList";
import SubmitArticle from "./components/SubmitArticle";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Show-Article-List" component={ShowArticleList} />
          <Route path="/Submit-Article" component={SubmitArticle} />
        </div>
      </Router>
    );
  }
}

export default App;
