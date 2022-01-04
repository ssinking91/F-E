import styled from "styled-components";
import NavBarAnchor from "./NavBarAnchor";
import Footer from "./Footer";
import { Text } from "../atoms/index";
import { ReactComponent as Top } from "../../images/top.svg";
const Section04 = (props) => {
  return (
    <>
      <div className="section num4">
        <NavBarAnchor />
        <SectionWrap>
          <AllSpan>
            <SpanBold>영상으로 배우는 청약 노하우</SpanBold>
            <span>✨</span>
          </AllSpan>
          <Text h4 color="#A5AAB6">
            청약 관련 정보를 담은 영상을 추천해드릴게요.
          </Text>
        </SectionWrap>
        <CardWraps>
          <Card>
            <iframe
              width="595"
              height="337"
              src="https://www.youtube.com/embed/nEtiX7nN9qE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
          <Card>
            <iframe
              width="595"
              height="337"
              src="https://www.youtube.com/embed/Ibz6iWmjYHo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
        </CardWraps>

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

const CardWraps = styled.div`
  width: 1200px;
  height: 337px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
`;

const Card = styled.div`
  width: 595px;
  height: 337px;
`;

const Atag = styled.a`
  width: 36px;
  height: 31px;
  margin: 105px auto 105px;
  display: block;
`;
