import React from "react";
import { Square } from "./Square";

export class Board extends React.Component {
  renderSquare(n) {
    return (
      <Square
        key={n}
        onClick={() => {
          this.props.onClick(n);
        }}
        item={this.props.items[n].square}
      />
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < this.props.range; i++) {
      squares.push(this.renderSquare(i));
    }

    return <div className="container">{squares}</div>;
  }
}
