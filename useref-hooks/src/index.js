import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./Components/App";
import Bmi from "./Components/Bmi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Bmi />
  </div>
);
