import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/global";

import { SignIn } from "./pages/SignIn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <SignIn />
  </React.StrictMode>
);
