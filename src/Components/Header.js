import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  top: calc(65vh - 50px);
  @media (max-width: 425px) {
    top: calc(50vh - 50px);
  }
  height: 50px;
  z-index: 1;
  font-size: 25px;
  display: flex;
  align-items: flex-end;
  color: #dfe6e9;
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Li = styled.li`
  display: flex;
  background-color: ${(props) =>
    props.current ? `rgba(45, 52, 54, 0.85)` : `rgba(45, 52, 54, 0.55)`};
  height: 100%;
  transition: background 0.3s linear;

  :hover {
    cursor: pointer;
    background: rgba(45, 52, 54, 0.85);
  }

  :not(:last-child) {
    border-right: 1.5px solid rgba(45, 52, 54, 0.85);
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
const SLink = styled(Link)`
  width: 100%;
  padding: 10px 50px;
  @media (max-width: 768px) {
    padding: 0;
  }
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
