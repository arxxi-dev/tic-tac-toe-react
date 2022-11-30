import React from "react";
import "./square.css";

export const Square = (props) => (
  <button className="square" name={props.name} onClick={props.onClick}>
    {props.value}
  </button>
);
