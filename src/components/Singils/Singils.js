import React, { Component } from "react";

import Amount from "../Amount/Amount";
import AddPersonForm from "../AddPersonForm/AddPersonForm";
import Persons from "../Persons/Persons";
import Summary from "../Summary/Summary";

class Singils extends Component {
  state = {
    amount: 0,
    people: [
      { id: 1, name: "Alice", paid: true },
      { id: 2, name: "Bobi", paid: false }
    ]
  };

  updateAmountHandler = event => {
    this.setState({
      amount: event.target.value
    });
  };

  addPersonHandler = person => {
    const people = [...this.state.people];
    people.push({ id: people.length + 1, name: person, paid: false });
    this.setState({ people: people });
  };

  togglePaidHandler = id => {
    const people = [...this.state.people];
    const personIdx = people.findIndex(person => person.id === id);

    const person = {
      ...people[personIdx]
    };
    person.paid = !person.paid;
    people[personIdx] = person;
    this.setState({ people });
  };

  deletePersonHandler = id => {
    const people = this.state.people.filter(person => person.id !== id);
    this.setState({ people });
  };

  getPaidCount = () => {
    return this.state.people.filter(person => person.paid).length;
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Amount
          amount={this.state.amount}
          updateAmount={this.updateAmountHandler}
        />
        <AddPersonForm addPerson={this.addPersonHandler} />
        <Persons
          persons={this.state.people}
          togglePaid={this.togglePaidHandler}
          deletePerson={this.deletePersonHandler}
        />
        <Summary
          paidCount={this.getPaidCount()}
          personCount={this.state.people.length}
          amount={this.state.amount}
        />
      </div>
    );
  }
}

export default Singils;
