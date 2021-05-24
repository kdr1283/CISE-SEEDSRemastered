/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import "../App.css";
/* import axios from "axios" */
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [{}],
    };
  }

  /* componentDidMount() {
    axios
      .get("https://team-7-seeds.herokuapp.com/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        })
      })
      .catch((err) => {
        console.log("Error from Home")
      })
  } */

  render() {
    return (
      <div className="App">
        <body className="AppBody">
          <h1>SEEDS Research Evidence and Articles Repository</h1>
          <h2>Team 7</h2>
          <li>
            <Link className="link-style" to="/Show-Article-List">
              Show Articles
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/Submit-Article">
              Submit an Article
            </Link>
          </li>
        </body>
      </div>
    );
  }
}

Link.render(<Home />, document.getElementById("App"));

export default Home;
