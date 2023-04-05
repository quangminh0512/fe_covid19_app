import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouteApp } from "./components/RouteApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>
);
