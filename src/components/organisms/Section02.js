import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import { history } from "../redux/configStore";
import Main2Card from "./Main2Card";
import NavBarAnchor from "./NavBarAnchor";
import { Text } from "../atoms/index";

const Section02 = (props) => {
  const dispatch = useDispatch();
  console.log("page2");

  useEffect(() => {
    dispatch(mainAction.getPrivateInfoDB());
    dispatch(mainAction.getPublicInfoDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Main > Sections02 유저이름 데이터 확인
  const userName = props.userName;
  // console.log(userName);

  // 로그인한 유저데이터
  const existuser = useSelector((state) => state.mypage.list.existuser);
  // console.log(existuser);

  // 민간 공고 3개
  const private_list = useSelector((state) => state.main.private_list);
  const private_regionInfo = private_list.slice(0, 3);
  console.log(private_regionInfo);

  // 공공 공고 3개
  const public_list = useSelector((state) => state.main.public_list);
  const public_regionInfo = public_list.slice(6, 9);
  // console.log(public_list);

  return (
    <>
      <div className="section" style={{ width: "100%", height: "100" }}>
        <NavBarAnchor />
        <SectionWrap>
          <SectionItem>
            <AllSpan>
              <Span1 className="a">{existuser.sido}</Span1>
              <Span2>지역의 청약은?</Span2>
              <span>📌</span>
            </AllSpan>
            {userName !== null ? (
              <Text h4 color="#A5AAB6">
                {userName}님이 선택한 {existuser.sido} 지역의 실시간 청약 정보를
                알 수 있어요
              </Text>
            ) : (
              <Text h4 color="#A5AAB6">
                로그인 하시면 관심 지역의 실시간 청약 정보를 알 수 있어요
              </Text>
            )}
          </SectionItem>

          <CardWrap>
            <PublicCards>
              <Text h4 color="#778899">
                공공 분양
              </Text>
              {public_regionInfo.map((item, index) => {
                // 공공 이름 편집 ex. [행복주택] 경기도 하남시
                const panName = `[${item.aisTypeName.split("(")[0]}] ${
                  item.address.split(" ")[0]
                } ${item.address.split(" ")[1]}`;
                return (
                  <Main2Card
                    key={index}
                    image={item.ImgUrl}
                    name={panName}
                    startDate={item.startDate}
                    endDate={item.closeDate}
                    size={`${item.size} m²`}
                    price={item.aisTypeName}
                    aptNo={item.panId}
                    islike={item.islike}
                    CardPanState={item.panState}
                    //공공 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/public/${item.panId}`);
                    }}
                  />
                );
              })}
            </PublicCards>

            <PrivateCards>
              <Text h4 color="#778899">
                민간 분양
              </Text>
              {private_regionInfo.length !== 0 ? (
                private_regionInfo.map((item, index) => {
                  return (
                    <Main2Card
                      key={index}
                      image={item.ImgUrl}
                      name={item.houseName}
                      startDate={item.receptStartDate}
                      endDate={item.receptEndDate}
                      size={`${item.size} m²`}
                      price={`${item.supplyAmount} 만원`}
                      aptNo={item.pblancNo}
                      islike={item.islike}
                      //민간 청약정보 ID 값
                      _onClick={() => {
                        history.push(`/private/${item.pblancNo}`);
                      }}
                    />
                  );
                })
              ) : (
                <Text h4 margin="100px 0">
                  <Span>🏚️..</Span> 실시간 민간 분양 청약정보가 없어요
                  <Span>😭</Span>
                  <Text>다른 관심지역을 선택해서 청약정보를 찾아보아요</Text>
                </Text>
              )}
            </PrivateCards>
          </CardWrap>
        </SectionWrap>
      </div>
    </>
  );
};
const Span = styled.span`
  font-weight: 400;
`;
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
