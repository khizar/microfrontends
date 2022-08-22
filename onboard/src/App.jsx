import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import FavFunds from "reactfunds/FavFunds";

import "./index.css";
import OnboardContent from "./OnboardContent";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OnboardContent} />
          <Route exact path="/favs" component={FavFunds} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
