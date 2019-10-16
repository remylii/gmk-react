import React from "react";
import { Block } from "./Block";

export function Square(props) {
  return (
    <div className="item">
      <Block stone={props.stone} />
    </div>
  );
}
