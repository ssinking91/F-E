import NavBar from "../organisms/NavBar";
import Main2Card from "../organisms/Main2Card";
import Main3Card from "../organisms/Main3Card";

import { Grid, Text, Button } from "../atoms/index";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <NavBar />
      <Fullpage></Fullpage>
      <Main2Card /> <br /> <br /> <br />
      <Main3Card /> <br /> <br /> <br />
      <iframe
        width="490"
        height="277"
        src="https://www.youtube.com/embed/nEtiX7nN9qE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

const anchors = ["page1", "page2", "page3", "page4"];

const Fullpage = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    verticalCentered={false}
    sectionsColor={["#fff", "#fff", "#fff", "#F9F9F9"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <>
          <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </div>
        </>
      );
    }}
  />
);

const Section1 = (props) => {
  return (
    <>
      <div className="section num1">
        <Background>
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

const Section2 = (props) => {
  return (
    <>
      <div className="section num2">
        <SectionWrap>
          <Text size="36px" color="#333333" margin="30px auto 10px auto" bold>
            000님의 관심 지역 청약은?📌
          </Text>
          <Text size="16px" color="#778899" margin="0px auto 20px auto">
            000님이 선택한 관심 지역의 실시간 청약 정보를 알 수 있어요 :)
          </Text>
          <Button
            margin="0 auto 30px auto"
            padding="8px 15px"
            background_color="#20D7FF"
            color="#FFFFFF"
          >
            관심지역
          </Button>
        </SectionWrap>
        <Main2Card />
      </div>
    </>
  );
};

const Section3 = (props) => {
  return (
    <>
      <div className="section num3">
        <SectionWrap>
          <Text size="36px" color="#333333" margin="30px auto 10px auto" bold>
            요즘 뜨고 있는 청약은?👀
          </Text>
          <Text size="16px" color="#778899" margin="0px auto 20px auto">
            사람들이 가장 눈여겨보는 청약순으로 조회/관심/매매 총 합으로
            나뉘어진 청약 정보예요.
          </Text>
          <Button
            margin="0 auto 30px auto"
            padding="8px 15px"
            background_color="#20D7FF"
            color="#FFFFFF"
          >
            전체리스트 보기
          </Button>
        </SectionWrap>
        <Main3Card />
      </div>
    </>
  );
};

const Section4 = (props) => {
  return (
    <>
      <div className="section num4">
        <SectionWrap>
          <Text size="36px" color="#333333" margin="30px auto 10px auto" bold>
            영상으로 배우는 청약 노하우✨
          </Text>
          <Text size="16px" color="#778899" margin="0px auto 20px auto">
            청약 관련 정보를 담은 영상을 추천해드릴게요.
          </Text>
        </SectionWrap>
      </div>
    </>
  );
};


const SectionWrap = styled.div`
  width: 100%;
  height: 185px;
  background-color: #f9f9f9;
  text-align: center;
  margin: 150px auto 30px;
`;