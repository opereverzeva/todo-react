import React from "react";
import classes from "./ListGoals.scss";

const ListGoals = ({ goals }) => {
  return (
    <ul className="list-group col-8 ">
      {goals.map((goal, index) => (
        <li key={index} className="list-group-item list-item">
          {goal}
        </li>
      ))}
    </ul>
  );
};

export default ListGoals;
