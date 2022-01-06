import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import Main3Card from "./Main3Card";
import NavBarAnchor from "./NavBarAnchor";
import { Text } from "../atoms/index";
const Section03 = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainAction.getPublicHotDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 공공 Hot
  const public_list_hot = useSelector((state) => state.main.public_list_hot);
  const public_regionInfo_hot = public_list_hot.slice(2, 5);
  console.log(public_regionInfo_hot);

  return (
    <>
      <div className="section" style={{ width: "100%", height: "900px" }}>
        <NavBarAnchor />
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
              const imgUrl = item.ImgUrl;
              const houseName = item.panName;
              const receptStartDate = item.startDate;
              const receptEndDate = item.closeDate;
              const size = item.size;
              const aisTypeName = item.aisTypeName;

              return (
                <Main3Card
                  key={index}
                  number={`0${index + 1})`}
                  image={imgUrl}
                  name={houseName}
                  startDate={receptStartDate}
                  endDate={receptEndDate}
                  size={`${size} m²`}
                  price={aisTypeName}
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
