import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactGA.initialize("UA-114647620-1");

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
