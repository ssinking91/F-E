import { useState } from "react";
import AsideSection from "../organisms/AsideSection";
import NavBar from "../organisms/NavBarLink";
import NavBarSub from "../organisms/NavBarSub";
import MapModal from "../organisms/MapModal";
import KakaoMap from "../utilities/KakaoMap";
import styled from "styled-components";

export default function Map() {
  const [publicPage, setPublicPage] = useState(1);
  const [privatePage, setPrivatePage] = useState(1);
  return (
    <>
      <Wrap>
        <NavBarWrap>
          <NavBar />
          <NavBarSub
            setPublicPage={setPublicPage}
            setPrivatePage={setPrivatePage}
          />
        </NavBarWrap>
        <BottomWrap>
          <Left>
            <KakaoMap />
            <MapModal />
          </Left>
          <Right>
            <AsideSection
              publicPage={publicPage}
              privatePage={privatePage}
              setPublicPage={setPublicPage}
              setPrivatePage={setPrivatePage}
            />
          </Right>
        </BottomWrap>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const NavBarWrap = styled.div`
  height: 17vh;
`;

const BottomWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 610px;
`;
