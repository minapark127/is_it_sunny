import React from "react";
import Landing from "./Landing";
import Header from "./Header";

const Outline = ({ children, weather }) => (
  <>
    <Landing timezone={weather.timezone}></Landing>
    <Header />
    <div>{children}</div>
  </>
);

export default Outline;
