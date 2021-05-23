/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ArticleTable from "./ArticleTable";

class ShowArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [{}],
    };
  }

  componentDidMount() {
    axios
      .get("https://team-7-seeds.herokuapp.com/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowArticleList");
      });
  }

  filterSearchByTDD() {
    // Declare variables
    let td;
    let i;
    let txtValue;
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("articles");
    const tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>SEEDS Research Evidence and Articles Repository</h1>
        <input
          type="text"
          id="myInput"
          onKeyUp={this.filterSearchByTDD}
          placeholder="Search for SE Practice..."
        />
        <input
          type="text"
          id="myInput"
          onKeyUp={this.filterSearchByYear}
          placeholder="Search for year..."
        />
        <ArticleTable data={this.state.articles} />
      </div>
    );
  }
}

Link.render(<ShowArticleList />, document.getElementById("App"));

export default ShowArticleList;
