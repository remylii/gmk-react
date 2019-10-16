import React from "react";
import ReactDOM from "react-dom";
import { Board } from "./Board";
import "./style.css";

class Game extends React.Component {
  render() {
    return (
      <div>
        <p>Game</p>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
