import styled from "styled-components";

import { ReactComponent as Logo } from "../../images/logo.svg";
import SocialLogin from "../organisms/Logins";
import Image from "../atoms/Image";

export default function LoginTemp() {
  return (
    <>
      <Wrap>
        <LeftArea>
          <ContentsArea>
            <Logo width="40px" />
            <SocialLogin />
          </ContentsArea>
        </LeftArea>
        <RightArea>
          <Image shape="rectangle" src="img/image.png" alt="images" />
        </RightArea>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
`;

const LeftArea = styled.div`
  width: 55%;
`;

const ContentsArea = styled.div`
  width: 40%;
  margin: auto;
`;

const RightArea = styled.div`
  width: 950px;
  height: 930px;
`;
