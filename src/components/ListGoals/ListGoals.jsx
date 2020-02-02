import React from "react";

const ListGoals = ({ goals }) => {
  return (
    <ul className="">
      {goals.map((goal, index) => (
        <li key={index}>{goal}</li>
      ))}
    </ul>
  );
};

export default ListGoals;
