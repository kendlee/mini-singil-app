import React, { Component } from "react";
import axios from "axios";

import Amount from "../Amount/Amount";
import AddPersonForm from "../AddPersonForm/AddPersonForm";
import Persons from "../Persons/Persons";
import Summary from "../Summary/Summary";

class Singils extends Component {
  state = {
    amount: 0,
    people: []
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

  save = () => {
    const { singilId } = this.props.match.params;
    if (!singilId) {
      axios
        .post("https://mini-singils-app.firebaseio.com/bills.json", {
          ...this.state
        })
        .then(res => {
          this.props.history.replace(`/${res.data.name}`);
        });
    } else {
      axios.put(
        `https://mini-singils-app.firebaseio.com/bills/${singilId}.json`,
        {
          ...this.state
        }
      );
    }
  };

  componentDidMount() {
    const { singilId } = this.props.match.params;
    if (singilId) {
      axios
        .get(`https://mini-singils-app.firebaseio.com/bills/${singilId}.json`)
        .then(res => {
          console.log(res);
          this.setState({
            ...res.data
          });
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Mini singils app (React Version)</h1>
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
        <button onClick={this.save}>Save</button>
      </div>
    );
  }
}

export default Singils;
