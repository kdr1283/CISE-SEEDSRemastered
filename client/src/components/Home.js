import React, { Component } from "react"
import "../App.css"
/*import axios from "axios"*/
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[
        {}
      ],
    }
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
  }*/

  render() {
    return (
      <div className="App">
        <h1>SEEDS Research Evidence and Articles Repository</h1>
        <Link to="/Show-Article-List">Show Articles</Link>
      </div>
    )
  }
}

Link.render(
    <Home/>, 
    document.getElementById("App")
  );

export default Home