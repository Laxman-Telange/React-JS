import React from "react";
import "../components-css/table.css";

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableOf: 1, // Default table number
    };
  }

  renderCell = (tableOf, number) => {
    return (
      <div className="row" key={number}>
        <button className="cell-button">{tableOf}</button>
        <span className="multi">{" X "}</span>
        <button className="cell-button">{number}</button>
        <span className="multi">{" = "}</span>
        <button className="cell-button result-cell">{tableOf * number}</button>
      </div>
    );
  };

  renderTable = (tableOf, rows) => {
    const tableRows = [];
    for (let i = 1; i <= rows; i++) {
      tableRows.push(this.renderCell(tableOf, i));
    }
    return tableRows;
  };

  buttonClicked = (tableOf) => {
    this.setState({ tableOf });
  };

  renderTableOf = () => {
    const buttons = [];
    for (let i = 1; i <= 10; i++) {
      buttons.push(
        <button
          key={i}
          className="cell-button"
          style={{ backgroundColor: "darkgrey", margin: "5px" }}
          onClick={() => this.buttonClicked(i)}
        >
          {i}
        </button>
      );
    }
    return <div className="button-row">{buttons}</div>;
  };

  render() {
    const { rows } = this.props; // Destructure rows from props
    const { tableOf } = this.state; // Get current tableOf from state
    return (
      <div className="table-container">
        <h1>Table of {tableOf}</h1>
        {this.renderTableOf()}
        {this.renderTable(tableOf, rows)}
      </div>
    );
  }
}
