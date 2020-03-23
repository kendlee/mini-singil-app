import React, { Component } from "react";

class AddPersonForm extends Component {
  state = {
    name: ""
  };

  updateNameHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  addPersonHandler = event => {
    this.props.addPerson(this.state.name);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Add people:</h2>
        <form onSubmit={this.addPersonHandler}>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.updateNameHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddPersonForm;
