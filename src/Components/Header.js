import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <ul>
    <Link to="/">current</Link>
    <Link to="/hourly">hourly</Link>
    <Link to="/daily">daily</Link>
  </ul>
);
