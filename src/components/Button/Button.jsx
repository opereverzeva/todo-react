import React from "react";

const Button = props => (
  <button
    className={props.buttonType}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
