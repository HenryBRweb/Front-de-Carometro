import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes";
import Header from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainRoute />
  </BrowserRouter>
);
