import React from "react";
import { Board } from "./Board";
import { config } from "./config/app";

export class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const range = config.BOARD_LENGTH ** 2;
    return (
      <div>
        <p>Game</p>
        <Board range={range} board_length={config.BOARD_LENGTH} />
        <p>Result: </p>
      </div>
    );
  }
}
