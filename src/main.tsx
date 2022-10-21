import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/Global";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Global />
    <App />
  </>
);
