import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #dfe6e9;
`;

export default () => (
  <Container>
    <Text>ERROR</Text>
  </Container>
);
