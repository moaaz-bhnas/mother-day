import React, { memo } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Cube = memo(({ bg = "transparent", size = 8, x = 0, y = 0, z = 0 }) => {
  return (
    <StyledCube bg={bg} size={size} x={x} y={y} z={z}>
      <Front size={size} />
      <Back size={size} />
      <Top size={size} />
      <Bottom size={size} />
      <Left size={size} />
      <Right size={size} />
    </StyledCube>
  );
});

const zoom = (x, y, z) => keyframes`
  0% {
    transform: translate3d(${x}rem, ${y}rem, ${z - 70}rem);
  }
  100% {
    transform: translate3d(${x}rem, ${y}rem, ${z}rem) rotate3d(1, 1, 1, 720deg);
  }
`;

const StyledCube = styled.div`
  position: relative;

  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};

  background-color: ${({ bg }) => bg};

  transform-style: preserve-3d;

  animation: ${({ x, y, z }) => zoom(x, y, z)} 6s ease-out 1s both;

  transition: transform 2s;
`;

const Face = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: inherit;
  border: 1px solid;

  background-color: pink;
`;

const Front = styled(Face)`
  transform: ${({ size }) => `translateZ(${size / 2}rem)`};
`;

const Back = styled(Face)`
  transform: ${({ size }) => `rotateY(180deg) translateZ(${size / 2}rem)`};
`;

const Top = styled(Face)`
  transform: ${({ size }) => `rotateX(90deg) translateZ(${size / 2}rem)`};
`;

const Bottom = styled(Face)`
  transform: ${({ size }) => `rotateX(-90deg) translateZ(${size / 2}rem)`};
`;

const Right = styled(Face)`
  transform: ${({ size }) => `rotateY(90deg) translateZ(${size / 2}rem)`};
`;

const Left = styled(Face)`
  transform: ${({ size }) => `rotateY(-90deg) translateZ(${size / 2}rem)`};
`;

export default Cube;
