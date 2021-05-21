import React from 'react';
import "../index.css";

export default class ArticleTable extends React.Component {
    
    constructor(props){
      super(props);
      this.getColumns = this.getColumns.bind(this);
      this.getRows = this.getRows.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function() {
      return Object.keys(this.props.data[0]);
    }
    
    getColumns = function() {
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }
    
    getRows = function() {
      var records = this.props.data;
      var keys = this.getKeys();
      return records.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }
    
    render() {
        return (
          <div>
            <table id='articles'>
            <thead>
              <tr>{this.getColumns()}</tr>
            </thead>
            <tbody>
              {this.getRows()}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) => {
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}