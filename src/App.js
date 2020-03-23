import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Switch, Redirect } from "react-router";

import Singils from "./components/Singils/Singils";
import SingilList from "./components/SingilList/SingilList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/list" component={SingilList} />
          <Route path="/new" component={Singils} />
          <Route path="/:singilId" component={Singils} />
          <Redirect from="/" to="/list" />
        </Switch>
        {/* <Singils singilId="-M36OlNKmec7gH4bELba" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
