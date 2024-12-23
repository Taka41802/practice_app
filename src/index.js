import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Routing from "./routing";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

reportWebVitals();
