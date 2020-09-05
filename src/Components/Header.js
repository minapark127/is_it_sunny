import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  top: calc(65vh - 50px);
  height: 50px;
  z-index: 1;
  font-size: 25px;
  display: flex;
  align-items: flex-end;
  color: #dff9fb;
`;

const Li = styled.li`
  display: flex;
  background-color: ${(props) =>
    props.current ? `rgba(99, 110, 114, 0.8)` : `rgba(99, 110, 114, 0.5)`};
  height: 100%;
  :hover {
    cursor: pointer;
    background: rgba(99, 110, 114, 0.8);
  }
  transition: background 0.2s linear;
`;
const SLink = styled(Link)`
  width: 100%;
  padding: 10px 50px;
`;

export default () => {
  const { pathname } = useLocation();
  return (
    <Ul>
      <Li current={pathname === "/"}>
        <SLink to="/">Current</SLink>
      </Li>
      <Li current={pathname === "/hourly"}>
        <SLink to="/hourly">Hourly</SLink>
      </Li>
      <Li current={pathname === "/daily"}>
        <SLink to="/daily">Daily</SLink>
      </Li>
    </Ul>
  );
};
