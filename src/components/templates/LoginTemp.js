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
            <Grid
              is_flex
              justify_content="center"
              align_items="center"
              margin="200px 0"
            >
              <Contents>
                <Link to="/">
                  <Logo width="40px" />
                </Link>
                <Text p size="36px" color="#363940" margin="30px 0">
                  로그인
                </Text>
                <Text p size="16px" color="#95A1BB">
                  반가워요:) 오늘 하루도 소중한 날 되시길 바랄게요
                  <br />
                  입장을 위한 로그인 부탁 드릴게요
                </Text>
                <SocialLogin />
              </Contents>
            </Grid>
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
  width: 360px;
  height: 420px;
`;

const RightArea = styled.div`
  width: 50%;
`;
