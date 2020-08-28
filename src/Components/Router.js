import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Hourly from "../Routes/Hourly";
import Daily from "../Routes/Daily";

const Router = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/hourly" exact component={Hourly} />
      <Route path="/daily" exact component={Daily} />
    </HashRouter>
  );
};

export default Router;
