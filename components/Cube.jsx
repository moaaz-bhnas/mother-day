import React, { memo } from "react";
import styled from "styled-components";

const Cube = memo(({ bg = "transparent", size = 6, x = 0, y = 0, z = 0 }) => {
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

const StyledCube = styled.div`
  position: relative;

  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};

  background-color: ${({ bg }) => bg};

  transition: transform 0.3s;
  transform: ${({ x, y, z }) => `translate3d(${x}rem, ${y}rem, ${z}rem)`};

  transform-style: preserve-3d;
`;

const Face = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: inherit;
  border: 1px solid;
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
