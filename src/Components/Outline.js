import React from "react";
import Landing from "./Landing";
import Header from "./Header";

const Outline = ({ children }) => (
  <>
    <Landing></Landing>
    <Header />
    <div>{children}</div>
  </>
);

export default Outline;
