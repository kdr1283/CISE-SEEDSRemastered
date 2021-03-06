/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class SubmitArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      authors: "",
      year: "",
      practice: "",
      claim: "",
      strength: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      authors: this.state.authors,
      year: this.state.year,
      practice: this.state.practice,
      claim: this.state.claim,
      strength: this.state.strength,
    };

    axios
      .post("https://team-7-seeds.herokuapp.com/api/articles", data)
      .then((res) => {
        this.setState({
          title: "",
          authors: "",
          year: "",
          practice: "",
          claim: "",
          strength: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in SubmitArticle!");
      });
  };

  render() {
    return (
      <div className="App">
        <h1>SEEDS Research Evidence and Articles Repository</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <label>
            Title:
            <input
              type="text"
              placeholder="Enter title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              required
            />
          </label>
          <br />
          <label>
            Author(s):
            <input
              type="text"
              placeholder="Enter author(s)"
              name="authors"
              value={this.state.authors}
              onChange={this.onChange}
              required
            />
          </label>
          <br />
          <label>
            Publication date:
            <input
              type="date"
              placeholder="Enter year"
              name="year"
              value={this.state.year}
              onChange={this.onChange}
              required
            />
          </label>
          <br />
          <label>
            SE Practice:
            <input
              type="text"
              placeholder="e.g TDD, FDD"
              name="practice"
              value={this.state.practice}
              onChange={this.onChange}
              required
            />
          </label>
          <br />
          <label>
            Claim:
            <input
              type="text"
              placeholder="e.g Improve Code Quality"
              name="claim"
              value={this.state.claim}
              onChange={this.onChange}
              required
            />
          </label>
          <br />
          <label>
            Strength of evidence:
            <input
              type="text"
              placeholder="e.g Strong, Medium, Weak"
              name="strength"
              value={this.state.strength}
              onChange={this.onChange}
              required
            />
          </label>
          <br />
          <input type="submit" />
        </form>
        <div className="link-style-container">
          <li>
            <Link className="link-style" to="/Show-Article-List">
              Show Article list
            </Link>
          </li>
          <br />
          <li>
            <Link className="link-style" to="/">
              Back
            </Link>
          </li>
        </div>
      </div>
    );
  }
}

export default SubmitArticle;
