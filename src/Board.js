import React from "react";
import { Square } from "./Square";
import { config } from "./config/app";
import { Block } from "./Block";

export class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [this.props.range].fill(null),
      bTurn: true
    };
  }

  handleClick(i) {
    const new_data = this.state.data.slice();
    const stone_attribute =
      this.state.bTurn === true ? "stone black" : "stone white";
    new_data[i] = <Block stone={stone_attribute} />;

    this.setState({
      data: new_data,
      bTurn: this.state.bTurn === true ? false : true
    });
  }

  render() {
    const squares = [];
    for (let i = 0; i < this.props.range; i++) {
      squares.push(
        <Square
          key={i}
          onClick={() => {
            this.handleClick(i);
          }}
          item={this.state.data[i]}
        />
      );
    }

    return <div className="container">{squares}</div>;
  }
}
