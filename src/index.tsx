import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
