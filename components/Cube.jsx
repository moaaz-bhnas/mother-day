import Image from "next/image";
import React, { memo } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Cube = memo(
  ({ bg = "transparent", size = 9, x = 0, y = 0, z = 0, images }) => {
    return (
      <StyledCube bg={bg} size={size} x={x} y={y} z={z}>
        <Front size={size}>
          <Image
            alt="Family"
            src={images[0]}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Front>
        <Back size={size}></Back>
        <Top size={size}></Top>
        <Bottom size={size}>
          <Image
            alt="Family"
            src={images[2]}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Bottom>
        <Left size={size}></Left>
        <Right size={size}>
          <Image
            alt="Family"
            src={images[1]}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Right>
      </StyledCube>
    );
  }
);

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

  animation: ${({ x, y, z }) => zoom(x, y, z)} 10s ease-out 1s both;
`;

const Face = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: inherit;

  &:nth-child(2) {
    background: linear-gradient(135deg, #eceddc 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, #eceddc 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, #eceddc 25%, transparent 25%),
      linear-gradient(45deg, #eceddc 25%, transparent 25%);
    background-size: 100px 100px;
    background-color: #ec173a;
  }

  &:nth-child(3) {
    background: radial-gradient(
        circle closest-side at 60% 43%,
        #b03 26%,
        rgba(187, 0, 51, 0) 27%
      ),
      radial-gradient(
        circle closest-side at 40% 43%,
        #b03 26%,
        rgba(187, 0, 51, 0) 27%
      ),
      radial-gradient(
        circle closest-side at 40% 22%,
        #d35 45%,
        rgba(221, 51, 85, 0) 46%
      ),
      radial-gradient(
        circle closest-side at 60% 22%,
        #d35 45%,
        rgba(221, 51, 85, 0) 46%
      ),
      radial-gradient(
        circle closest-side at 50% 35%,
        #d35 30%,
        rgba(221, 51, 85, 0) 31%
      ),
      radial-gradient(
          circle closest-side at 60% 43%,
          #b03 26%,
          rgba(187, 0, 51, 0) 27%
        )
        50px 50px,
      radial-gradient(
          circle closest-side at 40% 43%,
          #b03 26%,
          rgba(187, 0, 51, 0) 27%
        )
        50px 50px,
      radial-gradient(
          circle closest-side at 40% 22%,
          #d35 45%,
          rgba(221, 51, 85, 0) 46%
        )
        50px 50px,
      radial-gradient(
          circle closest-side at 60% 22%,
          #d35 45%,
          rgba(221, 51, 85, 0) 46%
        )
        50px 50px,
      radial-gradient(
          circle closest-side at 50% 35%,
          #d35 30%,
          rgba(221, 51, 85, 0) 31%
        )
        50px 50px;
    background-color: #b03;
    background-size: 100px 100px;
  }

  &:nth-child(5) {
    background-color: hsl(34, 53%, 82%);
    background-image: repeating-linear-gradient(
        45deg,
        transparent 5px,
        hsla(197, 62%, 11%, 0.5) 5px,
        hsla(197, 62%, 11%, 0.5) 10px,
        hsla(5, 53%, 63%, 0) 10px,
        hsla(5, 53%, 63%, 0) 35px,
        hsla(5, 53%, 63%, 0.5) 35px,
        hsla(5, 53%, 63%, 0.5) 40px,
        hsla(197, 62%, 11%, 0.5) 40px,
        hsla(197, 62%, 11%, 0.5) 50px,
        hsla(197, 62%, 11%, 0) 50px,
        hsla(197, 62%, 11%, 0) 60px,
        hsla(5, 53%, 63%, 0.5) 60px,
        hsla(5, 53%, 63%, 0.5) 70px,
        hsla(35, 91%, 65%, 0.5) 70px,
        hsla(35, 91%, 65%, 0.5) 80px,
        hsla(35, 91%, 65%, 0) 80px,
        hsla(35, 91%, 65%, 0) 90px,
        hsla(5, 53%, 63%, 0.5) 90px,
        hsla(5, 53%, 63%, 0.5) 110px,
        hsla(5, 53%, 63%, 0) 110px,
        hsla(5, 53%, 63%, 0) 120px,
        hsla(197, 62%, 11%, 0.5) 120px,
        hsla(197, 62%, 11%, 0.5) 140px
      ),
      repeating-linear-gradient(
        135deg,
        transparent 5px,
        hsla(197, 62%, 11%, 0.5) 5px,
        hsla(197, 62%, 11%, 0.5) 10px,
        hsla(5, 53%, 63%, 0) 10px,
        hsla(5, 53%, 63%, 0) 35px,
        hsla(5, 53%, 63%, 0.5) 35px,
        hsla(5, 53%, 63%, 0.5) 40px,
        hsla(197, 62%, 11%, 0.5) 40px,
        hsla(197, 62%, 11%, 0.5) 50px,
        hsla(197, 62%, 11%, 0) 50px,
        hsla(197, 62%, 11%, 0) 60px,
        hsla(5, 53%, 63%, 0.5) 60px,
        hsla(5, 53%, 63%, 0.5) 70px,
        hsla(35, 91%, 65%, 0.5) 70px,
        hsla(35, 91%, 65%, 0.5) 80px,
        hsla(35, 91%, 65%, 0) 80px,
        hsla(35, 91%, 65%, 0) 90px,
        hsla(5, 53%, 63%, 0.5) 90px,
        hsla(5, 53%, 63%, 0.5) 110px,
        hsla(5, 53%, 63%, 0) 110px,
        hsla(5, 53%, 63%, 0) 140px,
        hsla(197, 62%, 11%, 0.5) 140px,
        hsla(197, 62%, 11%, 0.5) 160px
      );
  }
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
