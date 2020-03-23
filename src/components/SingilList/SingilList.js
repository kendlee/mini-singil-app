import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class SingilList extends Component {
  state = { list: null };

  componentDidMount() {
    axios
      .get("https://mini-singils-app.firebaseio.com/bills.json")
      .then(res => {
        this.setState({ list: res.data ? res.data : [] });
      });
  }

  render() {
    let renderedList = <div>loading...</div>;
    const { list } = this.state;
    if (list) {
      renderedList = <div>Nothing to collect. Yay!</div>;
      if (list.length) {
        renderedList = (
          <ul>
            {Object.keys(list).map(key => (
              <li key={key}>
                <Link to={`/${key}`}>{key}</Link>
              </li>
            ))}
          </ul>
        );
      }
    }
    return (
      <div>
        <h1>Singil List</h1>
        {renderedList}
      </div>
    );
  }
}

export default SingilList;
