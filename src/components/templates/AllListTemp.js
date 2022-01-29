import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Text } from "../atoms/index";
import Pagination from "../molecules/Pagination";
import Card from "../organisms/MiniCard";
import NavBarLink from "../organisms/NavBarLink";
import NoneMiniCard from "../organisms/NoneMiniCard";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";

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

  const [ftbg, setFtbg] = useState(0);
  const [ftSido] = useState("경기");

  const getDB = (item) => {
    dispatch(getPrivateListDB(item));
    dispatch(getPublicListDB(item));
  };

  const dou = ["경기", "강원", "충청", "경상", "전라", "제주"];
  const si = ["서울", "인천", "부산", "대구", "대전", "광주", "울산", "세종"];

  const Page = "AllList";

  const publicPagesSum = 10;
  const [publicPage, setPublicPage] = useState(1);
  const publicPageSet = (publicPage - 1) * publicPagesSum;

  const privatePagesSum = 10;
  const [privatePage, setPrivatePage] = useState(1);
  const privatePageSet = (privatePage - 1) * privatePagesSum;

  return (
    <>
      <NavBarLink />
      <Grid is_flex>
        <Text h3 margin="100px auto 22px auto">
          전체 청약정보 보기
        </Text>
      </Grid>
      <Grid
        is_flex
        width="800px"
        margin="auto"
        radius="36px"
        background_color="#F9F9F9"
      >
        {dou.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            radius="36px"
            background_color={index === ftbg ? `#20D7FF` : ``}
            _onClick={() => {
              setFtbg(index);
              getDB(item);
              setPublicPage(1);
              setPrivatePage(1);
            }}
          >
            <Grid is_flex width="100%" height="30px" cursor="pointer">
              <Text
                h4
                color={index === ftbg ? `#F9F9F9` : `#A5AAB6`}
                margin="auto"
                padding="3px"
              >
                {item}
              </Text>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        is_flex
        width="800px"
        margin="20px auto 100px auto"
        background_color="#F9F9F9"
        radius="36px"
      >
        {si.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            radius="36px"
            background_color={index + 6 === ftbg ? `#20D7FF` : ``}
            _onClick={() => {
              setFtbg(index + 6);
              getDB(item);
              setPublicPage(1);
              setPrivatePage(1);
            }}
          >
            <Grid is_flex width="100%" height="30px" cursor="pointer">
              <Text
                h4
                color={index + 6 === ftbg ? `#F9F9F9` : `#A5AAB6`}
                margin="auto"
                padding="3px"
              >
                {item}
              </Text>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <CardWrap>
        <PublicCards>
          <Text h4 color="#778899">
            공공 분양
          </Text>
          {publicList && publicList.length !== 0 ? (
            publicList
              .slice(publicPageSet, publicPageSet + publicPagesSum)
              .map((item, index) => {
                const publicSales = "publicSales";
                const status = "public";
                let onlyNumber = item.panName.replace(
                  /[^0-9]{3,4}[^0-9]{3,4}/g,
                  "/"
                );
                let onlyNumber1 = onlyNumber.split("/");
                let onlyNumber2 = onlyNumber1[onlyNumber1.length - 2];

                return (
                  <Card
                    key={index}
                    image={item.ImgUrl}
                    name={item.panName}
                    startDate={item.startDate}
                    endDate={item.closeDate}
                    size={item.size}
                    price={`${item.aisTypeName} ${
                      onlyNumber2 === "" ? "" : `${onlyNumber2}호`
                    } `}
                    aptNo={item.panId}
                    CardPanState={item.panState}
                    publicSales={publicSales}
                    islike={item.islike}
                    Page={Page}
                    status={status}
                    _onClick={() => {
                      history.push(`/public/${item.panId}`);
                    }}
                  />
                );
              })
          ) : (
            <NoneMiniCard />
          )}
          {publicList && publicList.length !== 0 && (
            <Pagination
              total={publicList.length}
              setPage={setPublicPage}
              page={publicPage}
              pagesSum={publicPagesSum}
            />
          )}
        </PublicCards>

        <PrivateCards>
          <Text h4 color="#778899">
            민간 분양
          </Text>
          {privateList && privateList.length !== 0 ? (
            privateList.result
              .slice(privatePageSet, privatePageSet + privatePagesSum)
              .map((item, index) => {
                const status = "private";

                return (
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
                    _onClick={() => {
                      history.push(`/private/${item.pblancNo}`);
                    }}
                  />
                );
              })
          ) : (
            <NoneMiniCard />
          )}
          {privateList && privateList.length !== 0 && (
            <Pagination
              total={privateList.result.length}
              setPage={setPrivatePage}
              page={privatePage}
              pagesSum={privatePagesSum}
            />
          )}
        </PrivateCards>
      </CardWrap>
    </>
  );
}

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
