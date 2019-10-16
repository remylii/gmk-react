import React from "react";
import ReactDOM from "react-dom";
import { Game } from "./Game";
import "./style.css";
import { config } from "./config/app";

class App extends React.Component {
  render() {
    return <Game board_length={config.BOARD_LENGTH} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
