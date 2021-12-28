import styled from "styled-components";
import { Grid, Text, Button } from "../atoms/index";
import NavBar from "../organisms/NavBar";
const Section01 = (props) => {
  return (
    <>
      <div className="section num1">
        <Background>
      <NavBar />
        <TitleSectionWrap>
          <Text size="58px" bold>
            집을 모아놓다
          </Text>
          <Text size="58px" bold margin="0 0 22px 0">
            .zip
          </Text>
          <Button padding="13px 31px" margin="0 5px" size="12px">
            관심지역 설정하기
          </Button>
          <Button
            padding="13px 31px"
            margin="0 5px"
            size="12px"
            background_color="#333333"
            color="#fff"
          >
            청약 하러가기
          </Button>
          <Grid>
            <Button size="12px">아래로 스크롤 해주세요</Button>
          </Grid>
        </TitleSectionWrap>
        </Background>
      </div>
    </>
  );
};
const TitleSectionWrap = styled.div`
  margin-top: 178px;
  width: 100%;
  text-align: center;
  position: absolute;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/bg1.jpg");
  background-size: cover;
`;

export default Section01;
