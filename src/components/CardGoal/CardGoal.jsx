import React, { Component } from "react";
import Button from "../Button/Button";

class CardGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      edit: false
    };
  }

  finishGoal = event => {
    const currentNode = event.target.parentElement;
    const currentItem = event.target;
    currentNode.classList += " item-success";
    currentItem.disabled = true;
  };
  deleteGoal = event => {
    event.preventDefault();
    const currentNode = event.target.parentElement.parentElement.parentElement;
    console.log(currentNode);
    currentNode.remove();
  };

  editGoal = event => {
    const currentNode = event.target.parentElement.parentElement;
    this.setState({
      edit: true
    });
    this.props.editGoal(currentNode);
    // currentNode.innerHTML = <ChangeGoals value={1} />;
  };

  render() {
    return (
      <div className="card-item">
        <input
          buttonType={"custom-control-input"}
          disabled={false}
          onClick={this.finishGoal}
          type="checkbox"
        />

        <p className="m-0 text">{this.state.value}</p>
        <div className="d-flex ">
          <Button
            buttonType={"close mx-4"}
            disabled={false}
            onClick={this.editGoal}
          >
            Edit
          </Button>
          <Button
            buttonType={"close"}
            disabled={false}
            onClick={this.deleteGoal}
          >
            &times;
          </Button>
        </div>
      </div>
    );
  }
}

export default CardGoal;
