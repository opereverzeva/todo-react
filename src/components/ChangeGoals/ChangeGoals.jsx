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
  };

  handleChange = event => {
    const newValue = event.target.value;

    this.setState({
      value: newValue
    });
  };
  render() {
    return (
      <form className="form-row card-item" style={{ alignItems: "flex-end" }}>
        <Input
          value={this.state.value}
          htmlFor="text"
          onChange={this.handleChange}
          label=""
          labelHidden={"hidden"}
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
