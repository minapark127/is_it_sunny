import React from "react";
import Header from "./Header";

const Outline = ({ children, weather, temp }) => (
  <>
    <Header />
    <div>{children}</div>
  </>
);

export default Outline;
