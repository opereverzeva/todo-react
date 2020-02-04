import React from "react";

const Button = props => (
  <button
    className={props.buttonType}
    disabled={props.disabled}
    onClick={props.onClick}
    title={props.title}
  >
    {props.children}
  </button>
);

export default Button;
