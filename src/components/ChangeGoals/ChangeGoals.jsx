import React, { Component } from "react";

import Input from "../input/input";
import Button from "../Button/Button";

class ChangeGoals extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  editGoals = event => {
    event.preventDefault();
    this.props.editGoals(this.state.value);
    console.log(event.target.value);
    console.log(this.props);
  };

  handleChange = event => {
    console.log(event.target.value);

    const newValue = event.target.value;
    console.log("newValue ", newValue);
    this.setState({
      value: newValue
    });

    console.log("val ", this.state.value);
  };
  render() {
    return (
      <form className="form-row my-4" style={{ alignItems: "flex-end" }}>
        <Input
          value={this.state.value}
          htmlFor="text"
          onChange={this.handleChange}
        />
        <Button
          buttonType={"btn btn-ligth"}
          disabled={false}
          onClick={this.editGoals}
        >
          ok
        </Button>
      </form>
    );
  }
}

export default ChangeGoals;
