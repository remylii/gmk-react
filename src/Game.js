import React from "react";
import { config } from "./config/app";
import { Board } from "./Board";
import { Block } from "./Block";

export class Game extends React.Component {
  constructor(props) {
    super(props);

    const range = this.props.board_length ** 2;

    this.state = {
      items: Array(range).fill({
        value: null,
        square: null
      }),
      turn: config.PLAYER.BLACK,
      winner: null
    };
  }

  handleClick(i) {
    if (this.state.items[i].value !== null || this.state.winner !== null) {
      return;
    }

    const items = this.state.items.slice();
    const stone_attribute =
      this.state.turn === config.PLAYER.BLACK ? "stone black" : "stone white";
    items[i] = {
      value:
        this.state.turn === config.PLAYER.BLACK
          ? config.PLAYER.BLACK
          : config.PLAYER.WHITE,
      square: <Block stone={stone_attribute} />
    };

    const winner = this.gameJudge(i, items);

    this.setState({
      items: items,
      winner: winner,
      turn:
        this.state.turn === config.PLAYER.BLACK
          ? config.PLAYER.WHITE
          : config.PLAYER.BLACK
    });
  }

  gameJudge(idx, items) {
    if (items[idx].value === null) {
      return null;
    }

    const s = items[idx].value;

    const pointer_directions = [
      this.props.board_length + 1,
      this.props.board_length,
      this.props.board_length - 1,
      1
    ];

    for (const val of pointer_directions) {
      let round = 0;
      let same_count = 1;

      while (round < 2) {
        let direction = round === 0 ? val : -val;

        // 端
        if (this.canMovePointer(idx, direction) === false) {
          round++;
          continue;
        }

        for (let i = 1; i < config.WIN_COUNT; i++) {
          let target_idx = idx + direction * i;
          if (
            target_idx < 0 ||
            target_idx >= items.length ||
            s !== items[target_idx].value
          ) {
            break;
          }

          same_count++;

          if (this.canMovePointer(target_idx, direction) === false) {
            break;
          }
        }

        round++;
      }

      if (same_count >= config.WIN_COUNT) {
        return s;
      }
    }
    return null;
  }

  canMovePointer(idx, direction) {
    if (idx % this.props.board_length === 0) {
      if (
        direction === -(this.props.board_length + 1) ||
        direction === -1 ||
        direction === this.props.board_length - 1
      ) {
        return false;
      }
    }

    const idx_n = parseInt(idx.toString().substr(-1), 10);
    if (idx_n === this.props.board_length - 1) {
      if (
        direction === -(this.props.board_length - 1) ||
        direction === 1 ||
        direction === this.props.board_length + 1
      ) {
        return false;
      }
    }

    return true;
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
          items={this.state.items}
          onClick={i => this.handleClick(i)}
        />
        <p>
          Result:{" "}
          {this.state.winner !== null ? this.state.winner + "の勝利" : ""}
        </p>
      </div>
    );
  }
}
