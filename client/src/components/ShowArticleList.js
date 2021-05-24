/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ArticleTable from "./ArticleTable";

export const API = "https://team-7-seeds.herokuapp.com/api";
export const fetchData = async (query) => {
  const url = `${API}/${query}`;

  // eslint-disable-next-line no-return-await
  return await axios.get(url);
};

class ShowArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [{}],
    };
  }

  componentDidMount() {
    axios
      .get(`${API}/articles`)
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowArticleList");
      });
  }

  filterSearchBySEPractice() {
    // Declare variables
    let td;
    let i;
    let txtValue;
    const input = document.getElementById("mySEPracticeInput");
    const filter = input.value.toUpperCase();
    // console.log(filter);
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

  filterSearchByYear() {
    // Declare variables
    let td;
    let i;
    let txtValue;
    const input = document.getElementById("myDateInput");
    const filter = input.value.toUpperCase();
    const inputDate = new Date(filter);
    const inputYear = inputDate.getFullYear();
    // console.log(`Input: ${inputYear}`);
    const table = document.getElementById("articles");
    const tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];

      if (td) {
        txtValue = td.textContent || td.innerText;
        const articleDate = new Date(txtValue);
        const articleYear = articleDate.getFullYear();
        // console.log(`Article date: ${articleYear}`);
        if (
          txtValue.toUpperCase().indexOf(filter) > -1 ||
          articleYear === inputYear
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  filterSearchByClaim() {
    // Declare variables
    let td;
    let i;
    let txtValue;
    const input = document.getElementById("myClaimInput");
    const filter = input.value.toUpperCase();
    // console.log(filter);
    const table = document.getElementById("articles");
    const tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
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
        <div className="link-style-container">
          <li>
            <Link className="link-style" to="/">
              Back
            </Link>
          </li>
        </div>
        <br />
        <br />
        <br />
        <input
          type="text"
          id="mySEPracticeInput"
          onKeyUp={this.filterSearchBySEPractice}
          placeholder="Search for SE Practice"
        />
        <input
          type="text"
          id="myDateInput"
          onKeyUp={this.filterSearchByYear}
          placeholder="Search by publication year"
        />
        <input
          type="text"
          id="myClaimInput"
          onKeyUp={this.filterSearchByClaim}
          placeholder="Search for a related-claim"
        />
        <ArticleTable data={this.state.articles} />
      </div>
    );
  }
}

Link.render(<ShowArticleList />, document.getElementById("App"));

export default ShowArticleList;
