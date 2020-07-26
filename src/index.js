import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./app/App";
import Themer from "./app/Themer";
import store from "./store.js";
import Initializer from "./app/Initializer";
import "./assets/css/styles.css";

ReactDOM.render(
  <Provider store={store}>
    <Initializer>
      <Themer>
        <App />
      </Themer>
    </Initializer>
  </Provider>,
  document.getElementById("root")
);
