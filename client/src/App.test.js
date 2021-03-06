/* eslint-disable import/no-duplicates */
// import { render, screen } from '@testing-library/react';
import ReactDOM from "react-dom";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
// import ShowArticleList from "./components/ShowArticleList";
import App from "./App";
import Home from "./components/Home";
import ArticleTable from "./components/ArticleTable";
import { fetchData, API } from "./components/ShowArticleList";

jest.mock("axios");

it("renders App without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders ShowArticleList without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <Router>
//       <ShowArticleList />
//     </Router>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

it("renders Home without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Home />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("ArticleTable renders tabular format", () => {
  const div = document.createElement("div");
  const testData = [
    ["test", "1"],
    ["report", "2"],
  ];
  ReactDOM.render(
    <Router>
      <ArticleTable data={testData} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: "1",
            title: "a",
          },
          {
            objectID: "2",
            title: "b",
          },
        ],
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData("articles")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(`${API}/articles`);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData("react")).rejects.toThrow(errorMessage);
  });
});

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});
