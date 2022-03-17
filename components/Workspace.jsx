import React, { memo } from "react";
import styled from "styled-components";
import Cube from "./Cube";

const Workspace = memo(() => {
  return (
    <StyledWorkspace aria-hidden="true">
      <Scene>
        <Cube
          x={-3}
          images={["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"]}
        />
        <Cube
          x={-1}
          images={["/images/4.jpg", "/images/5.jpg", "/images/6.jpg"]}
        />
        <Cube
          x={1}
          images={["/images/7.jpg", "/images/8.jpg", "/images/9.jpg"]}
        />
        <Cube
          x={3}
          images={["/images/10.jpg", "/images/11.jpg", "/images/12.jpg"]}
        />
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
  perspective: 500px;
  perspective-origin: 50% 50%;
`;

export default Workspace;
