import styled from "styled-components";
import Workspace from "../components/Workspace";

const Title = styled.h1`
  position: absolute;
`;

export default function Home() {
  return (
    <>
      <Title>عيد الأم</Title>
      <Workspace />
    </>
  );
}
