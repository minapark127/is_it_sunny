import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Current from "../Routes/Current";
import Hourly from "../Routes/Hourly";
import Daily from "../Routes/Daily";

const Router = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Current} />
      <Route path="/hourly" component={Hourly} />
      <Route path="/daily" component={Daily} />
    </HashRouter>
  );
};

export default Router;
