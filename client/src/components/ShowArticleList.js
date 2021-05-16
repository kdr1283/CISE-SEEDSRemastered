import React, { Component } from "react"
import "../App.css"
import axios from "axios"
import { Link } from 'react-router-dom';
import ArticleTable from "./ArticleTable"

class ShowArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[
        {}
      ],
    }
  }

  componentDidMount() {
    axios
      .get("https://team-7-seeds.herokuapp.com/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        })
      })
      .catch((err) => {
        console.log("Error from ShowArticleList")
      })
  }

  render() {
    return (
      <div className="App">
        <h1>SEEDS Research Evidence and Articles Repository</h1>
        <ArticleTable data={this.state.articles}/>
      </div>
    )
  }
}

Link.render(
    <ShowArticleList />, 
    document.getElementById("App")
  );

export default ShowArticleList