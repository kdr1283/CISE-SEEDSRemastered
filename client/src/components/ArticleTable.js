/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from "react";
import "../App.css";

export default class ArticleTable extends React.Component {
  constructor(props) {
    super(props);
    this.getColumns = this.getColumns.bind(this);
    this.getRows = this.getRows.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function () {
    return Object.keys(this.props.data[0]);
  };

  getColumns = function () {
    const keys = this.getKeys();
    return keys.map((key, index) => <th key={key}>{key.toUpperCase()}</th>);
  };

  getRows = function () {
    const records = this.props.data;
    const keys = this.getKeys();
    return records.map((row, index) => (
      <tr key={index}>
        <RenderRow key={index} data={row} keys={keys} />
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <table className="content-table" id="articles">
          <thead>
            <tr>{this.getColumns()}</tr>
          </thead>
          <tbody>{this.getRows()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) =>
  props.keys.map((key, index) => (
    <td key={props.data[key]}>{props.data[key]}</td>
  ));
