import React from "react";
import classes from "./ListGoals.scss";
import Button from "../Button/Button";

const ListGoals = ({ goals }) => {
  const deleteGoal = event => {
    event.preventDefault();
    const currentNode = event.target.parentElement;
    currentNode.remove();
  };

  const finishGoal = event => {
    const currentNode = event.target.parentElement;
    const currentItem = event.target;
    currentNode.classList += " item-success";
    console.log(currentItem);
    currentItem.disabled = true;
  };

  return (
    <ul className="list-group col-8 ">
      {goals.map((goal, index) => (
        <li key={index} className="list-group-item list-item">
          <input
            buttonType={"custom-control-input"}
            disabled={false}
            onClick={finishGoal}
            type="checkbox"
          />

          <p className="m-0 text">{goal}</p>
          <Button buttonType={"close"} disabled={false} onClick={deleteGoal}>
            &times;
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ListGoals;
