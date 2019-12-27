import React from "react";
import ReactDOM from "react-dom";

import { Widget } from "~features/widget";

import "./routes";

const App = () => {
  return <Widget />;
};

ReactDOM.render(<App />, document.getElementById("app"));
