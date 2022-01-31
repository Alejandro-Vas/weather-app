import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

import App from "./components/app/App";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
