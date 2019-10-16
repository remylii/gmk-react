import React from "react";

export function Square(props) {
  return (
    <div className="item" onClick={props.onClick}>
      {props.item}
    </div>
  );
}
