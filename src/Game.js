import React from "react";
import { config } from "./config/app";
import { Board } from "./Board";
import { Block } from "./Block";

export class Game extends React.Component {
  constructor(props) {
    super(props);

    const range = config.BOARD_LENGTH ** 2;

    this.state = {
      squares: Array(range).fill(null),
      turn: config.PLAYER.BLACK,
      winner: null
    };
  }

  handleClick(i) {
    if (this.state.squares[i] !== null || this.state.winner !== null) {
      return;
    }

    const squares = this.state.squares.slice();
    const stone_attribute =
      this.state.turn === config.PLAYER.BLACK ? "stone black" : "stone white";
    squares[i] = <Block stone={stone_attribute} />;

    const winner = this.gameJudge(i);

    this.setState({
      squares: squares,
      winner: winner,
      turn:
        this.state.turn === config.PLAYER.BLACK
          ? config.PLAYER.WHITE
          : config.PLAYER.BLACK
    });
  }

  gameJudge(idx) {
    return null;
  }

  render() {
    const range = config.BOARD_LENGTH ** 2;
    return (
      <div>
        <p>
          {this.state.turn === config.PLAYER.BLACK
            ? "黒のターン"
            : "白のターン"}
        </p>
        <Board
          range={range}
          squares={this.state.squares}
          onClick={i => this.handleClick(i)}
        />
        <p>Result: </p>
      </div>
    );
  }
}
