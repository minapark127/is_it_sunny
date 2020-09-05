import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Home from "../Routes/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
