import AsideSection from "../organisms/AsideSection";
import NavBar from "../organisms/NavBarAnchor";
import KakaoMap from "../utilities/KakaoMap";
import styled from "styled-components";

export default function Test() {
  return (
    <>
      <Wrap>
        <NavBar />
        <Left>
          <KakaoMap />
        </Left>
        <Right>
          <AsideSection />
        </Right>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 400px;
`;
