import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import { history } from "../redux/configStore";
import Main3Card from "./Main3Card";
import NavBarAnchor from "./NavBarAnchor";
import { Text } from "../atoms/index";
const Section03 = (props) => {
  const dispatch = useDispatch();
  console.log("page3");

  useEffect(() => {
    dispatch(mainAction.getPublicHotDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 공공 Hot
  const public_list_hot = useSelector((state) => state.main.public_list_hot);
  const public_regionInfo_hot = public_list_hot.slice(1, 4);
  console.log(public_regionInfo_hot);

  return (
    <>
      <div className="section" style={{ width: "100%", height: "900px" }}>
        {/* <NavBarAnchor /> */}
        <SectionWrap>
          <SectionItem>
            <AllSpan>
              <SpanBold>요즘 뜨고 있는 청약은?</SpanBold>
              <span>👀</span>
            </AllSpan>
            <Text h4 color="#A5AAB6">
              사람들이 가장 눈여겨보는 청약순으로 조회/관심/매매 총 합으로
              나뉘어진 청약 정보예요.
            </Text>
          </SectionItem>
          <CardWrap>
            {public_regionInfo_hot.map((item, index) => {
              return (
                <Main3Card
                  key={index}
                  number={`0${index + 1})`}
                  image={item.ImgUrl}
                  name={item.panName}
                  startDate={item.startDate}
                  endDate={item.closeDate}
                  size={`${item.size} m²`}
                  price={item.aisTypeName}
                  aptNo={item.panId}
                  islike={item.islike}
                  //공공 청약정보 ID 값
                  _onClick={() => {
                    history.push(`/public/${item.panId}`);
                  }}
                />
              );
            })}
          </CardWrap>
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

const CardWrap = styled.div`
  width: 1200px;
  height: 593px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
`;
