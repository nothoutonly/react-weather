import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./css/styles.css";

import { Home, CurrentWeather } from "./Containers";
import { App } from "./Components";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/current" component={CurrentWeather} />
        <Route path="/error" component={Error} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
