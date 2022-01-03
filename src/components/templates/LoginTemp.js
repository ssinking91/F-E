import styled from "styled-components";

import { Link } from "react-router-dom";

import { Grid } from "../atoms/index";
import { ReactComponent as Logo } from "../../images/logo.svg";
import SocialLogin from "../organisms/Logins";
import Image from "../atoms/Image";

export default function LoginTemp() {
  return (
    <>
      <Grid is_flex>
        <LeftArea>
          <ContentsArea>
            <Link to="/">
              <Logo width="40px" />
            </Link>
            <SocialLogin />
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
  height: 100%;
`;

const ContentsArea = styled.div`
  width: 40%;
  height: 50%;
  margin: auto;
`;

const RightArea = styled.div`
  width: 50%;
`;
