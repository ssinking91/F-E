import styled from "styled-components";
import { Grid, Text, Button } from "../atoms/index";
import { ReactComponent as Scroll } from "../../images/scroll.svg";
// import mainBackgroundImage from "../../images/mainBackgroundImage.jpg";
import NavBar from "./NavBar";
const Section01 = (props) => {
  return (
    <>
      <div className="section num1" style={{ position: "relative" }}>
        <NavBar />
        <Hr />

        <Background
          style={{
            // backgroundImage: `url(${mainBackgroundImage})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <TitleSectionWrap>
            <Text h1>집을 모아놓다.zip</Text>
            <Text h2 color="#a5aab6" margin="15px 0 60px 0">
              당신을 위한 청약 정보가{" "}
              <span style={{ color: "#20d7ff" }}>21개</span> 모여있어요
            </Text>
            <Button background_color="#20d7ff" padding="13px 21px">
              <Text h3 color="#fff">
                청약 리스트 보러가기
              </Text>
            </Button>
            <Grid width="236px" margin="280px auto 30px auto">
              <Text h4 color="#20d7ff">
                나만의 맞춤 청약을 확인하려면 아래로 스크롤 해주세요
              </Text>
            </Grid>
            <Scroll width="20px" height="10px" />
          </TitleSectionWrap>
        </Background>
      </div>
    </>
  );
};
const Hr = styled.div`
  border-top: 1px solid #e3e5eb;
`;
const TitleSectionWrap = styled.div`
  margin-top: 178px;
  width: 100%;
  text-align: center;
`;
const Background = styled.div``;

export default Section01;
