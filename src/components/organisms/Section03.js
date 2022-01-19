import React from "react";
import styled from "styled-components";
import Section3Slide from "./Section3Slide";
import { Text } from "../atoms/index";
const Section03 = (props) => {
  return (
    <>
      <div
        className="section"
        style={{
          width: "100%",
          height: "900px",
          paddingTop: "97px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* <NavBarAnchor /> */}
        <SectionWrap>
          <SectionItem>
            <AllSpan>
              <SpanBold>요즘 뜨고 있는 청약은?</SpanBold>
              <span>👀</span>
            </AllSpan>
            <Text h4 color="#A5AAB6">
              사람들이 가장 많이 찜한 청약순으로 나뉘어진 정보에요.
            </Text>
          </SectionItem>
          <SlideDiv>
            <Section3Slide />
          </SlideDiv>
        </SectionWrap>
      </div>
    </>
  );
};

export default Section03;

const SectionWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const SectionItem = styled.div`
  width: 800px;
  height: 86px;
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

const SlideDiv = styled.div`
  width: 100%;
  height: 653%;
`;
