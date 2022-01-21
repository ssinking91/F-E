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
import topButton from "../../images/topButton.png"

export default function AsideSection() {
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location);
  const locate = location.pathname;
  const history = useHistory();
  const eventList = useSelector((state) => state.map.list);
  const clickButton = useSelector((state) => state.map.divisionClick);

  const clicked = useSelector((state) => state.map.clicked);
  const show = useSelector((state) => state.map.show);
  const hidden = useSelector((state) => state.map.hidden);
  console.log(show, hidden);

  React.useEffect(() => {
    dispatch(getPublicListMapDB(eventList));
    dispatch(getPrivateListMapDB(eventList));
  }, [dispatch, eventList]);

  // 모달 상태관리
  const [modal, setModal] = useState(true);
  const detailModal = () => {
    if (!modal) {
      setModal(true);
    }
  };

  const publicList = useSelector((store) => store.map.public_sido);
  const privateList = useSelector((store) => store.map.private_sido);

  const click = (address) => {
    console.log(address);
    dispatch(clickOne(address));
  };
  
  const scrollToTop = (event) => {
    document.getElementById('TOP').scrollTo({top:0, left:0, behavior: "smooth"} );   
  };

  return (
    <>
      <Wrap>
        <TopButton
          onClick={() => {
            console.log("1");
            scrollToTop();
          }}
        />
        <ContentArea id="TOP">
          {clickButton === "민간분양"
            ? privateList &&
              privateList.map((item, index) => {
                const asideSectionView = "asideSection";
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
                      aptNo={item.pblancNo}
                      islike={item.islike}
                      asideSectionView={asideSectionView}
                      _onClick={() => {
                        history.push(`/private/${item.pblancNo}`);
                      }}
                    />
                  </Grid>
                );
              })
            : publicList &&
              publicList.map((item, index) => {
                const publicSales = "publicSales";
                const asideSectionView = "asideSection";
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
                      price={item.aisTypeName}
                      aptNo={item.panId}
                      islike={item.islike}
                      CardPanState={item.panState}
                      publicSales={publicSales}
                      asideSectionView={asideSectionView}
                      _onClick={() => {
                        detailModal(`/public/${item.panId}`);
                      }}
                    />
                  </Grid>
                );
              })}
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
  height: 64PX;
  position: fixed;
  right: 2%;
  bottom: 2%;
  background-image: url("${topButton}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
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
