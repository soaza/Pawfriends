import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import DogPage from "./pages/DogPage/DogPage";
import ExcoPage from "./pages/ExcoPage/ExcoPage";
import reportWebVitals from "./reportWebVitals";
import { AnimatePresence, motion } from "framer-motion";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
