/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import Main2Card from "./Main2Card";
import { Grid } from "../atoms/index";

import { useHistory, useLocation } from "react-router-dom";
import {
  getPublicListMapDB,
  getPrivateListMapDB,
  clickOne,
} from "../redux/modules/map";
import topButton from "../../images/topButton.png";
import Pagination from "../molecules/Pagination";

export default function AsideSection({
  publicPage,
  privatePage,
  setPublicPage,
  setPrivatePage,
}) {
  const dispatch = useDispatch();
  const location = useLocation();

  const locate = location.pathname;
  const history = useHistory();
  const eventList = useSelector((state) => state.map.list);
  const clickButton = useSelector((state) => state.map.divisionClick);
  const clicked = useSelector((state) => state.map.clicked);
  const show = useSelector((state) => state.map.show);
  const hidden = useSelector((state) => state.map.hidden);

  React.useEffect(() => {
    dispatch(getPublicListMapDB(eventList));
    dispatch(getPrivateListMapDB(eventList));
  }, [dispatch, eventList]);

  const publicList = useSelector((store) => store.map.public_sido);
  const privateStatusArr = useSelector((store) => store.map.statusArr);
  const privateList = useSelector((store) => store.map.private_sido);
  console.log(privateStatusArr);

  const click = (address) => {
    dispatch(clickOne(address));
  };

  const buttonRef = React.useRef();
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const onScroll = (e) => {
    setScrollY(e.target.scrollTop);
    if (ScrollY > 500) {
      // 500 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 500 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  // 클릭하면 스크롤이 위로 올라가는 함수
  const scrollToTop = (event) => {
    buttonRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const publicPagesSum = 15;
  const publicPageSet = (publicPage - 1) * publicPagesSum;

  const privatePagesSum = 10;
  const privatePageSet = (privatePage - 1) * privatePagesSum;

  return (
    <>
      <Wrap>
        {BtnStatus ? (
          <TopButton
            onClick={() => {
              // console.log("1");
              scrollToTop();
            }}
          />
        ) : (
          <></>
        )}
        <ContentArea id="TOP" ref={buttonRef} onScroll={onScroll}>
          {clickButton === "민간분양"
            ? privateList &&
              privateList
                .slice(privatePageSet, privatePageSet + privatePagesSum)
                .map((item, index) => {
                  const asideSectionView = "asideSection";
                  const divPrivate = "private";
                  let status;

                  privateStatusArr
                    ? (status = privateStatusArr[index].status)
                    : (status = "접수마감");
                  console.log(status);

                  return (
                    <Grid
                      margin="10px 0 0 20px"
                      key={index}
                      _onClick={() => click(item.address)}
                    >
                      <Main2Card
                        key={index}
                        image={item.ImgUrl}
                        name={item.houseName}
                        startDate={item.receptStartDate}
                        endDate={item.receptEndDate}
                        size={item.size}
                        price={item.supplyAmount}
                        CardPanState={status}
                        aptNo={item.pblancNo}
                        islike={item.islike}
                        division={divPrivate}
                        asideSectionView={asideSectionView}
                      />
                    </Grid>
                  );
                })
            : publicList &&
              publicList
                .slice(publicPageSet, publicPageSet + publicPagesSum)
                .map((item, index) => {
                  const publicSales = "publicSales";
                  const asideSectionView = "asideSection";
                  const divPublic = "public";
                  let onlyNumber = item.panName.replace(
                    /[^0-9]{3,4}[^0-9]{3,4}/g,
                    "/"
                  );
                  let onlyNumber1 = onlyNumber.split("/");
                  let onlyNumber2 = onlyNumber1[onlyNumber1.length - 2];
                  return (
                    <Grid
                      margin="10px 0 0 20px"
                      key={index}
                      _onClick={() => click(item.address)}
                    >
                      <Main2Card
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
                        islike={item.islike}
                        CardPanState={item.panState}
                        publicSales={publicSales}
                        division={divPublic}
                        asideSectionView={asideSectionView}
                      />
                    </Grid>
                  );
                })}
          {clickButton === "민간분양"
            ? privateList && (
                <Pagination
                  total={privateList.length}
                  setPage={setPrivatePage}
                  page={privatePage}
                  pagesSum={privatePagesSum}
                />
              )
            : publicList && (
                <Pagination
                  total={publicList.length}
                  setPage={setPublicPage}
                  page={publicPage}
                  pagesSum={publicPagesSum}
                />
              )}
        </ContentArea>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 610px;
  height: 100vh;
  position: relative;
  right: 0;
  background-color: #f5f5f5;
`;

const TopButton = styled.a`
  width: 64px;
  height: 64px;
  position: fixed;
  right: 2%;
  bottom: 2%;
  background-image: url("${topButton}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  transition: all 3s;
  cursor: pointer;
  /* background-color: red; */
`;

const ContentArea = styled.div`
  position: absolute;
  top: 160px;
  height: 83vh;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #20d7ff;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  }
`;
