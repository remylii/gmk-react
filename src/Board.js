import React from "react";
import { Square } from "./Square";
import { config } from "./config/app";

export class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data_length = config.BOARD_LENGTH ** 2;
    const squares = [];
    for (let i = 0; i < data_length; i++) {
      let stone = i % 2 === 0 ? "stone black" : "stone white";
      squares.push(<Square key={i} stone={stone} />);
    }

    return <div className="container">{squares}</div>;
  }
}
