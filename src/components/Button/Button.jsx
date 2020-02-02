import React from "react";

const Button = props => (
  <button
    className="btn btn-primary"
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
