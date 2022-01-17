import React, { useEffect, useState } from "react";
import { Grid, Text } from "../atoms/index";
import NavBarLink from "../organisms/NavBarLink";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";
import Card from "../organisms/Main2Card";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import NoneMain2Card from "../organisms/NoneMain2Card";
// import { replace } from "connected-react-router";

export default function AllListTemp() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPrivateListDB(ftSido));
    dispatch(getPublicListDB(ftSido));
  }, []);

  const publicList = useSelector((store) => store.allList.publicList);
  const publicAdress = useSelector((store) => store.allList.publicAdress);
  const privateList = useSelector((store) => store.allList.privateList);
  console.log(publicList);
  console.log(publicAdress);
  console.log(privateList);
  const [ftbg, setFtbg] = useState(0);
  const [ftSido] = useState("경기");
  const [MypageSido, setMypageSido] = useState("경기");

  const getDB = (item) => {
    console.log(item);
    dispatch(getPrivateListDB(item));
    dispatch(getPublicListDB(item));
  };

  const dou = ["경기", "강원", "충청", "경상", "전라", "제주"];
  const si = ["서울", "인천", "부산", "대구", "대전", "광주", "울산", "세종"];

  const Page = "AllList";


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
              getDB(item);
              setMypageSido(item);
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
          {publicList && publicList.length !== 0 ? (
            publicList.map((item, index) => {
              const publicSales = "publicSales";
              const status = "public";
             
              return (
                <>
                  <Card
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
                    MypageSido={MypageSido}
                    //공공 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/public/${item.panId}`);
                    }}
                  />
                </>
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
          {privateList && privateList.length !== 0 ? (
            privateList.result.map((item, index) => {
              const status = "private";

              return (
                <>
                  <Card
                    key={index}
                    image={item.ImgUrl}
                    name={item.houseName}
                    startDate={item.receptStartDate}
                    endDate={item.receptEndDate}
                    size={item.size}
                    price={item.supplyAmount}
                    aptNo={item.pblancNo}
                    CardPanState={privateList.statusArr[index].status}
                    islike={item.islike}
                    Page={Page}
                    status={status}
                    MypageSido={MypageSido}
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
            <NoneMain2Card />
          )}
        </PrivateCards>
      </CardWrap>
    </>
  );
}

// const Span = styled.span`
//   font-weight: 400;
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
