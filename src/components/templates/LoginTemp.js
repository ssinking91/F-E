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
          <Image shape="rectangle" src="img/image.png" alt="images" />
        </RightArea>
      </Grid>
    </>
  );
}

const LeftArea = styled.div`
  width: 55%;
`;

const ContentsArea = styled.div`
  width: 40%;
  margin: auto;
`;

const RightArea = styled.div`
  width: 1000px;
`;
