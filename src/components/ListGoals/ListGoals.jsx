import React, { Component } from "react";
import classes from "./ListGoals.scss";
import CardGoal from "../CardGoal/CardGoal";

import ChangeGoals from "../ChangeGoals/ChangeGoals";

class ListGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editKey: -1
    };
  }

  editGoal = value => {
    const key = Number(value.parentNode.dataset.set);
    this.setState({
      editKey: key
    });
    console.log(this.state.editKey);
  };

  changedGoal = value => {
    console.log("value", value);
    this.props.editedGoals(value, this.state.editKey);
    this.setState({
      editKey: -1
    });
  };

  render() {
    return (
      <ul className="list-group col-8 ">
        {this.props.goals.map((goal, index) => (
          <li key={index} data-set={index}>
            {this.state.editKey === index ? (
              <div className="list-group-item">
                <ChangeGoals value={goal} editGoals={this.changedGoal} />
              </div>
            ) : (
              <CardGoal value={goal} editGoal={this.editGoal} />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGoals;
