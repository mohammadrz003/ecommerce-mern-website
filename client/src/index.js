import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://techshop.iran.liara.run";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
