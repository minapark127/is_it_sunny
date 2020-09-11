import React from "react";
import Header from "./Header";

const Outline = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
  </>
);

export default Outline;
