import React, { useEffect } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import Main2Card from "./Main2Card";
import NavBarAnchor from "./NavBarAnchor";
import { Text } from "../atoms/index";

const Section02 = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainAction.getPrivateInfoDB());
    dispatch(mainAction.getPublicInfoDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 민간 공고 3개
  const private_list = useSelector((state) => state.main.private_list);
  const private_regionInfo = private_list.slice(0, 3);
  // console.log(private_regionInfo);

  // 공공 공고 3개
  const public_list = useSelector((state) => state.main.public_list);
  const public_regionInfo = public_list.slice(2, 5);
  // console.log(public_regionInfo);

  return (
    <>
      <div className="section" style={{ width: "100%", height: "100" }}>
        <NavBarAnchor />
        <SectionWrap>
          <SectionItem>
            <AllSpan>
              <Span1 className="a">인천광역시</Span1>
              {/* <Span1 className="b">강화군</Span1> */}
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
              {public_regionInfo.map((item, index) => {
                const imgUrl = item.ImgUrl;
                const houseName = item.panName;
                const receptStartDate = item.startDate;
                const receptEndDate = item.closeDate;
                const size = item.size;
                const aisTypeName = item.aisTypeName;

                return (
                  <Main2Card
                    key={index}
                    image={imgUrl}
                    name={houseName}
                    startDate={receptStartDate}
                    endDate={receptEndDate}
                    size={`${size} m²`}
                    price={aisTypeName}
                    // _onClick={() => {
                    //   history.push(`/detail/${props.detailId}`);
                    // }}
                  />
                );
              })}
            </PublicCards>

            <PrivateCards>
              <Text h4 color="#778899">
                민간 분양
              </Text>
              {private_regionInfo.map((item, index) => {
                const imgUrl = item.ImgUrl;
                const houseName = item.houseName;
                const receptStartDate = item.receptStartDate;
                const receptEndDate = item.receptEndDate;
                const size = item.size;
                const supplyAmount = item.supplyAmount;
                const pblancNo = item.pblancNo;

                return (
                  // <Link
                  //   to={{

                  //     pathname: `/private/${pblancNo}`,
                  //   }}
                  //   key={index}
                  // >
                  <Main2Card
                    key={index}
                    aptNo={pblancNo}
                    image={imgUrl}
                    name={houseName}
                    startDate={receptStartDate}
                    endDate={receptEndDate}
                    size={`${size} m²`}
                    price={`${supplyAmount} 만원`}
                  />
                  // </Link>
                );
              })}
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
