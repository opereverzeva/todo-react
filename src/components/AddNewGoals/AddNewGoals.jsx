import React, { Component } from "react";

import Input from "../input/input";
import Button from "../Button/Button";

class AddNewGoals extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isFormValid: false,
    value: "",
    disabled: true
  };
  createGoals = event => {
    event.preventDefault();
    this.props.addNewGoals(this.state.value);
    this.setState({
      disabled: true,
      value: ""
    });
  };

  handleChange = event => {
    if (event.target.value) {
      this.setState({
        disabled: false,
        value: event.target.value
      });
    }
  };
  render() {
    return (
      <div className="container">
        <form
          action="#"
          className="form-row"
          style={{ alignItems: "flex-end" }}
        >
          <Input htmlFor="text" onChange={this.handleChange} />
          <Button disabled={this.state.disabled} onClick={this.createGoals}>
            +
          </Button>
        </form>
      </div>
    );
  }
}

export default AddNewGoals;
