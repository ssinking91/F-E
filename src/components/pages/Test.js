import AsideSection from "../organisms/AsideSection";
import NavBar from "../organisms/NavBarAnchor";
import NavBarSub from "../organisms/NavBarSub";
import KakaoMap from "../utilities/KakaoMap";
import styled from "styled-components";

export default function Test() {
  return (
    <>
      <Wrap>
        <NavBarWrap>
          <NavBar />
          <NavBarSub />
        </NavBarWrap>
        <BottomWrap>
          <Left>
            <KakaoMap />
          </Left>
          <Right>
            <AsideSection />
          </Right>
        </BottomWrap>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
`;

const NavBarWrap = styled.div`
  height: 17vh;
`;

const BottomWrap = styled.div`
  width: 100%;
  height: 83vh;
  display: flex;
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 500px;
`;
