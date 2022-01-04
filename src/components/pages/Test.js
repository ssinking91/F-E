import styled from "styled-components";
import NavBar from "../organisms/NavBarAnchor";

export default function Test() {
  return (
    <>
      <NavBar />
      <Wrap>
        <Text>123</Text>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  max-height: 1080px;
  /* height: 100%; */
  background-color: #999;
`;

const Text = styled.span`
  height: 10%;
  background-color: #999;
`;
