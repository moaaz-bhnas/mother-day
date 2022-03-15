import React, { memo } from "react";
import styled from "styled-components";
import Cube from "./Cube";

const Workspace = memo(() => {
  return (
    <StyledWorkspace>
      <Scene>
        <Cube x={-10} y={10} />
        <Cube x={10} y={10} />
      </Scene>
    </StyledWorkspace>
  );
});

const StyledWorkspace = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) =>
      `${theme.bg.workspace} radial-gradient(circle at 30% 30%, #fff, transparent)`};
  }
`;

const Scene = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  transform-style: preserve-3d;
  perspective: 400px;
  perspective-origin: 50% 50%;
`;

export default Workspace;
