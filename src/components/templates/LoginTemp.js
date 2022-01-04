import styled from "styled-components";

import { Link } from "react-router-dom";

import { Grid, Text } from "../atoms/index";
import { ReactComponent as Logo } from "../../images/logo.svg";
import SocialLogin from "../organisms/Logins";

export default function LoginTemp() {
  return (
    <>
      <Grid is_flex>
        <LeftArea>
          <ContentsArea>
            <Contents>
              <Link to="/">
                <Logo width="40px" />
              </Link>
              <Text h1 style={{ fontSize: "43px" }}>
                로그인
              </Text>
              <SocialLogin />
            </Contents>
          </ContentsArea>
        </LeftArea>
        <RightArea>
          <img src="img/image.png" alt="images" style={{ width: "100%" }} />
        </RightArea>
      </Grid>
    </>
  );
}

const LeftArea = styled.div`
  width: 50%;
`;

const ContentsArea = styled.div`
  width: 40%;
  margin: auto;
`;

const Contents = styled.div`
  height: 420px;
  background-color: #999;
`;

const RightArea = styled.div`
  width: 50%;
`;
