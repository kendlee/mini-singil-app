import React from "react";

import Person from "./Person/Person";

const persons = props => (
  <div>
    <h2>People:</h2>
    {props.persons.map(person => (
      <Person
        key={person.id}
        {...person}
        togglePaid={() => props.togglePaid(person.id)}
        deletePerson={() => props.deletePerson(person.id)}
      />
    ))}
  </div>
);

export default persons;
