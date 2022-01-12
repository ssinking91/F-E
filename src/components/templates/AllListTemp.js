import React, { useEffect, useState } from "react";
import { Grid, Text } from "../atoms/index";
import NavBarLink from "../organisms/NavBarLink";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";
import Card from "../organisms/Main2Card";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { replace } from "connected-react-router";

export default function AllListTemp() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPrivateListDB(ftSido));
    dispatch(getPublicListDB(ftSido));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const publicList = useSelector((store) => store.allList.publicList);
  const privateList = useSelector((store) => store.allList.privateList);
  console.log(publicList);
  console.log(privateList);
  const [ftbg, setFtbg] = useState(0);
  const [ftSido] = useState("경기도");
  //   const [ftprivateSido, setFtprivateSido] = useState("경기");

  const getDB = (item) => {
    console.log(item);
    dispatch(getPrivateListDB(item));
    dispatch(getPublicListDB(item));
  };

  const dou = ["경기도", "강원도", "충청도", "경상도", "전라도", "제주도"];
  const si = ["서울", "인천", "부산", "대구", "대전", "광주", "울산", "세종"];
  return (
    <>
      <NavBarLink />
      <Grid is_flex>
        <Text h3 margin="100px auto 22px auto">
          전체 청약정보 보기
        </Text>
      </Grid>
      <Grid is_flex width="800px" margin="auto" background_color="#F9F9F9">
        {dou.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            background_color={index === ftbg ? `#20D7FF` : ``}
            cursor="pointer"
            _onClick={() => {
              setFtbg(index);
              //   setFtSido(item);
              getDB(item);
            }}
          >
            <Text
              h4
              color={index === ftbg ? `#F9F9F9` : `#A5AAB6`}
              margin="auto"
              padding="3px"
            >
              {item}
            </Text>
          </Grid>
        ))}
      </Grid>
      <Grid
        is_flex
        width="800px"
        margin="20px auto 100px auto"
        background_color="#F9F9F9"
      >
        {si.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            background_color={index + 6 === ftbg ? `#20D7FF` : ``}
            cursor="pointer"
            _onClick={() => {
              setFtbg(index + 6);
              //   setFtSido(item);
              getDB(item);
            }}
          >
            <Text
              h4
              color={index + 6 === ftbg ? `#F9F9F9` : `#A5AAB6`}
              margin="auto"
              padding="3px"
            >
              {item}
            </Text>
          </Grid>
        ))}
      </Grid>

      <CardWrap>
        <PublicCards>
          <Text h4 color="#778899">
            공공 분양
          </Text>
          {publicList &&
            publicList.map((item, index) => {
              const panName = `[${item.aisTypeName}] ${
                item.address.split(" ")[0]
              } ${item.address.split(" ")[1]}`;
              const publicSales = "publicSales";
              return (
                <>
                  <Card
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
                    publicSales={publicSales}
                    //공공 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/public/${item.panId}`);
                      // console.log(item);
                    }}
                  />
                </>
              );
            })}
        </PublicCards>

        <PrivateCards>
          <Text h4 color="#778899">
            민간 분양
          </Text>
          {privateList && privateList.length !== 0 ? (
            privateList.map((item, index) => {
              let minPrize = item.supplyAmount.split("~")[0].replace(",", "");
              // 5자리 기준
              let minPrize1 = `${minPrize.split("")[minPrize.length - 5]}억 ${
                minPrize.split("")[1]
              }${minPrize.split("")[2]}${minPrize.split("")[3]}${
                minPrize.split("")[4]
              }`;

              const maxPrize = item.supplyAmount.split("~")[1].replace(",", "");
              // 5자리 기준
              let maxPrize1 = `${maxPrize.split("")[maxPrize.length - 5]}억 ${
                maxPrize.split("")[1]
              }${maxPrize.split("")[2]}${maxPrize.split("")[3]}${
                maxPrize.split("")[4]
              }`;
              return (
                <>
                  <Card
                    key={index}
                    image={item.ImgUrl}
                    name={item.houseName}
                    startDate={item.receptStartDate}
                    endDate={item.receptEndDate}
                    size={`${item.size} m²`}
                    price={`${minPrize1} ~ ${maxPrize1}`}
                    aptNo={item.pblancNo}
                    islike={item.islike}
                    //민간 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/private/${item.pblancNo}`);
                      console.log(item);
                    }}
                  />
                </>
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
    </>
  );
}

const Span = styled.span`
  font-weight: 400;
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
