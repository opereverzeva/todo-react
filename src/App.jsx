import React, { Component } from "react";
import "./App.scss";
import AddNewGoals from "./components/AddNewGoals/AddNewGoals";
import ListGoals from "./components/ListGoals/ListGoals";

class App extends Component {
  state = {
    isFormValid: false,
    value: [],
    disabled: true
  };

  onChangeList = goal => {
    let arrGoals = this.state.value;
    arrGoals.push(goal);
    this.setState({
      value: arrGoals
    });
    console.log(this.state.value);
  };

  onDeleteGoal = () => {
    console.log("rew");
  };

  render() {
    return (
      <div className="container">
        <AddNewGoals addNewGoals={this.onChangeList} />
        <ListGoals goals={this.state.value} deleteGoal={this.onDeleteGoal} />
      </div>
    );
  }
}

export default App;
