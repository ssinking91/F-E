import styled from "styled-components";
import Footer from "./Footer";
import YoutudeSlide from "./YoutudeSlide";
import { Text } from "../atoms/index";
import { ReactComponent as Top } from "../../images/top.svg";
const Section04 = (props) => {
  // console.log("page4");
  return (
    <>
      <div
        className="section"
        style={{ paddingTop: "97px", backgroundColor: "#f9f9f9" }}
      >
        {/* <NavBarAnchor /> */}
        <SectionWrap>
          <AllSpan>
            <SpanBold>영상으로 배우는 청약 노하우</SpanBold>
            <span>✨</span>
          </AllSpan>
          <Text h4 color="#A5AAB6">
            청약 관련 정보를 담은 영상을 추천해드릴게요.
          </Text>
        </SectionWrap>
        <YoutudeSlide />
        <Atag href="/#page1">
          <Top />
        </Atag>
        <Footer />
      </div>
    </>
  );
};

export default Section04;

const SectionWrap = styled.div`
  width: 100%;
  height: 86px;
  background-color: #f9f9f9;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
`;

const AllSpan = styled.span`
  margin: 0px auto 18px;
  height: 43px;
  line-height: 43px;
  font-size: 36px;
`;

const SpanBold = styled.span`
  font-weight: bold;
  color: #333333; ;
`;

const Atag = styled.a`
  width: 36px;
  height: 31px;
  margin: 90px auto 90px;
  display: block;
`;
