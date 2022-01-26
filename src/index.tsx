import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

import App from "./components/app/App";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
    <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById("root")
);
