import React from "react";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = props => {
  const inputType = props.type || "text";

  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className="col-8">
      <label htmlFor={htmlFor}>Введите новую задачу</label>
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
