import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import { mypagetActions } from "../redux/modules/mypage";
import { history } from "../redux/configStore";
import Main2Card from "./Main2Card";
import NoneMain2Card from "./NoneMain2Card";
import { Text } from "../atoms/index";

const Section02 = () => {
  const dispatch = useDispatch();
  console.log("page2");

  useEffect(() => {
    console.log("@@@@@page2 ue2@@@@@");
    dispatch(mainAction.getPrivateInfoDB());
    dispatch(mainAction.getPublicInfoDB());

    if (localStorage.getItem("userKey")) {
      const userKey = localStorage.getItem("userKey");
      dispatch(mypagetActions.getUserInfosFB(userKey));
    }
  }, []);

  // 로그인한 유저데이터
  const existuser = useSelector((state) => state.mypage.list.existuser);
  //console.log(existuser);

  // 공공 공고 3개
  const public_list = useSelector((state) => state.main.public_list);

  const public_regionInfo = public_list.slice(0, 3);
  console.log(public_regionInfo);
  
  // 민간 공고 3개
  let private_list = useSelector((state) => state.main.private_list.privateSido1);

  let private_regionInfo = private_list.slice(0, 3);
  console.log(private_regionInfo);

  let private_status_list = useSelector((state) => state.main.private_list.statusArr);

  let private_statusInfo = private_status_list.slice(0, 3);

  const Page = "section2";

  return (
    <>
      <div
        className="section"
        style={{
          width: "100%",
          height: "100",
          paddingTop: "97px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* <NavBarAnchor /> */}
        <SectionWrap>
          <SectionItem>
            <AllSpan>
              {existuser.sido ? (
                <>
                  <Span2>
                    <Span1 className="a">{existuser.sido}</Span1>
                    지역 청약은?
                  </Span2>
                  <span>📌</span>
                </>
              ) : (
                <>
                  <Span2>관심 지역 청약은?</Span2>
                  <span>📌</span>
                </>
              )}
            </AllSpan>
            {localStorage.getItem("userName") ? (
              <Text h4 color="#A5AAB6">
                {localStorage.getItem("userName")}님이 선택한 {existuser.sido}{" "}
                지역의 실시간 청약 정보를 알 수 있어요
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
              {public_regionInfo.length !== 0 ? (
                public_regionInfo.map((item, index) => {
                  const publicSales = "publicSales";
                  const status = "public";
                  console.log(item.islike)
                  return (
                    <Main2Card
                      key={index}
                      image={item.ImgUrl}
                      name={item.panName}
                      startDate={item.startDate}
                      endDate={item.closeDate}
                      size={item.size}
                      price={item.aisTypeName}
                      aptNo={item.panId}
                      CardPanState={item.panState}
                      publicSales={publicSales}
                      islike={item.islike}
                      Page={Page}
                      status={status}
                      //공공 청약정보 ID 값
                      _onClick={() => {
                        history.push(`/public/${item.panId}`);
                      }}
                    />
                  );
                })
              ) : (
                <NoneMain2Card />
              )}
            </PublicCards>

            <PrivateCards>
              <Text h4 color="#778899">
                민간 분양
              </Text>
              {private_regionInfo.length !== 0 ? (
                private_regionInfo.map((item, index) => {
                  const status = "private";
                  console.log( item.islike)
                  return (
                    <Main2Card
                      key={index}
                      image={item.ImgUrl}
                      name={item.houseName}
                      startDate={item.receptStartDate}
                      endDate={item.receptEndDate}
                      size={item.size}
                      price={item.supplyAmount}
                      aptNo={item.pblancNo}
                      CardPanState={private_statusInfo[index].status}
                      islike={item.islike}
                      Page={Page}
                      status={status}
                      //민간 청약정보 ID 값
                      _onClick={() => {
                        history.push(`/private/${item.pblancNo}`);
                      }}
                    />
                  );
                })
              ) : (
                <NoneMain2Card />
              )}
            </PrivateCards>
          </CardWrap>
        </SectionWrap>
      </div>
    </>
  );
};
// const Span = styled.span`
//   font-weight: 400;
// `;
const SectionWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const SectionItem = styled.div`
  width: 700px;
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

// const TextDiv = styled.div`
//   width: 100%
//   display : flex;
//   margin: 100px 0;
// `;

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
