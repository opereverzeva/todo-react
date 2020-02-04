import React from "react";
import classes from "./input.scss";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = props => {
  const inputType = props.type || "text";

  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className="col-8">
      <label htmlFor={htmlFor} className={props.labelHidden}>
        {props.label}
      </label>
      <input
        type={inputType}
        onChange={props.onChange}
        className="form-control"
        id={htmlFor}
        value={props.value}
      />
      {isInvalid(props) ? (
        <span>(props.errorMessage || "Поле не должно быть пустым")</span>
      ) : null}
    </div>
  );
};

export default Input;
