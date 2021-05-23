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
        <Link to="/Show-Article-List">Show Article list</Link>
        <br />
        <Link to="/">Back</Link>
        <form noValidate onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Article title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Article author(s)"
            name="authors"
            value={this.state.authors}
            onChange={this.onChange}
            required
          />
          <br />
          <input
            type="date"
            placeholder="Publication year"
            name="year"
            value={this.state.year}
            onChange={this.onChange}
            required
          />
          <br />
          <input
            type="text"
            placeholder="SE practice"
            name="practice"
            value={this.state.practice}
            onChange={this.onChange}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Claim"
            name="claim"
            value={this.state.claim}
            onChange={this.onChange}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Strength"
            name="strength"
            value={this.state.strength}
            onChange={this.onChange}
            required
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SubmitArticle;
