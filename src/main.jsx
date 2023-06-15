import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import TopMenuBar from "./components/TopMenuBar.jsx";
import BottomMenuBar from "./components/BottomMenuBar.jsx";

const ConditionalBottomMenuBar = () => {
  const location = useLocation();
  const excludedPaths = ["/login", "/register"];

  if (excludedPaths.includes(location.pathname)) return null;

  return <BottomMenuBar />;
};

const ConditionalTopMenuBar = () => {
  const location = useLocation();
  const excludedPaths = ["/login", "/register"];

  if (excludedPaths.includes(location.pathname)) return null;

  return <TopMenuBar />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConditionalTopMenuBar />
      <App />
      <ConditionalBottomMenuBar />
    </BrowserRouter>
  </React.StrictMode>
);
