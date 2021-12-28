import styled from "styled-components";
import { Grid, Text, Button } from "../atoms/index";
import { ReactComponent as Scroll } from "../../images/scroll.svg";
import mainBackgroundImage from "../../images/mainBackgroundImage.jpg";
const Section01 = (props) => {
  return (
    <>
      <div className="section num1">
        <Background
          style={{
            backgroundImage: `url(${mainBackgroundImage})`,
            backgroundSize: "100% 100%",
            width: "100%",
            height: "100%",
          }}
        >
          <TitleSectionWrap>
            <Text size="58px" bold>
              집을 모아놓다
            </Text>
            <Text size="58px" bold margin="0 0 22px 0">
              .zip
            </Text>
            <Button
              padding="13px 31px"
              margin="0 5px"
              size="12px"
              border="1px solid #333333"
              background_color="rgba(0,0,0,0)"
            >
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
              <Button
                size="12px"
                color="#778899"
                background_color="rgba(0,0,0,0)"
                margin="148px auto 0 auto"
              >
                아래로 스크롤 해주세요
              </Button>
            </Grid>
            <Scroll width="10" height="5" />
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
const Background = styled.div``;

export default Section01;
