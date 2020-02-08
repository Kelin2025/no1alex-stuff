import React from "react";
import ReactDOM from "react-dom";

import { Root } from "~features/layout";

import "./routes";
import "~api/auth";

const App = () => {
  return <Root />;
};

ReactDOM.render(<App />, document.getElementById("app"));
