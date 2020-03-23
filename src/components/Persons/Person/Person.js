import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <input
          id={`paid${this.props.id}`}
          type="checkbox"
          checked={this.props.paid}
          onChange={this.props.togglePaid}
        />
        <label htmlFor={"paid" + this.props.id}>{this.props.name}</label>
        <button onClick={this.props.deletePerson}>-</button>
      </div>
    );
  }
}

export default Person;
