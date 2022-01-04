import styled from "styled-components";
import Main2Card from "./Main2Card";

import NavBarAnchor from "./NavBarAnchor";
import { Text } from "../atoms/index";

const Section02 = (props) => {
  return (
    <>
      <div className="section num2" style={{ width: "100%", height: "100" }}>
        <NavBarAnchor />
        <SectionWrap>
          <SectionItem>
            <AllSpan>
              <Span1 className="a">인천광역시</Span1>
              <Span1 className="b">강화군</Span1>
              <Span2>의 청약은?</Span2>
              <span>📌</span>
            </AllSpan>
            <Text h4 color="#A5AAB6">
              000님이 선택한 관심 지역의 실시간 청약 정보를 알 수 있어요
            </Text>
          </SectionItem>

          <CardWrap>
            <PublicCards>
              <Text h4 color="#778899">
                공공 분양
              </Text>
              <Main2Card />
              <Main2Card />
              <Main2Card />
            </PublicCards>

            <PrivateCards>
              <Text h4 color="#778899">
                민간분양
              </Text>
              <Main2Card />
              <Main2Card />
              <Main2Card />
            </PrivateCards>
          </CardWrap>
        </SectionWrap>
      </div>
    </>
  );
};
const SectionWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const SectionItem = styled.div`
  width: 600px;
  height: 86px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 46.5px auto;
`;

const AllSpan = styled.span`
  height: 43px;
  line-height: 43px;
  font-size: 36px;
  margin-bottom: 18px;
  & > .a {
    border-bottom: 2px solid #20d7ff;
    padding-bottom: 5px;
    margin-right: 12px;
  }
  & > .b {
    border-bottom: 2px solid #20d7ff;
    padding-bottom: 5px;
  }
`;

const Span1 = styled.span`
  font-weight: bold;
  color: #20d7ff; ;
`;

const Span2 = styled.span`
  font-weight: bold;
  color: #333333;
`;

const CardWrap = styled.div`
  width: 1200px;
  height: 606px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
`;

const PublicCards = styled.div`
  width: 595px;
  height: 606px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const PrivateCards = styled.div`
  width: 595px;
  height: 606px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export default Section02;
