import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./app/App";
import Themer from "./app/Themer";
import store from "./store.js";
import Initializer from "./app/Initializer";
import "./assets/css/styles.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Initializer>
        <Themer>
          <App />
        </Themer>
      </Initializer>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
