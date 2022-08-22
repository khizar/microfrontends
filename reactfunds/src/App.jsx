import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import FavFunds from "./FavFunds";

const App = () => (
  <div className="container">
    <FavFunds />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
