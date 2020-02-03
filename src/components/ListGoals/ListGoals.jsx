import React from "react";
import classes from "./ListGoals.scss";
import Button from "../Button/Button";

const ListGoals = ({ goals }) => {
  const deleteGoal = event => {
    event.preventDefault();
    const currentNode = event.target.parentElement;
    console.log(currentNode);
    currentNode.remove();
  };

  return (
    <ul className="list-group col-8 ">
      {goals.map((goal, index) => (
        <li key={index} className="list-group-item list-item">
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
