// import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import axios from 'axios';
import ShowArticleList from './components/ShowArticleList';
import ArticleTable from './components/ArticleTable';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Addition", () => {
  it("knows that 3 and 3 make 6", () => {
    expect(3 + 3).toBe(6)
  })
});


it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ShowArticleList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowArticleList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('api exists', () => {
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
})