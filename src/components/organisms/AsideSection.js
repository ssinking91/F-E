/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import AsideCard from "../organisms/AsideCard";
import Main2Card from "./Main2Card";
import { Grid } from "../atoms/index";

import {
  getPublicListMapDB,
  getPrivateListMapDB,
  clickOne,
} from "../redux/modules/map";

export default function AsideSection() {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.map.list);
  const clickButton = useSelector((state) => state.map.divisionClick);
  const clicked = useSelector((state) => state.map.clicked);
  console.log(clicked);

  React.useEffect(() => {
    dispatch(getPublicListMapDB(eventList));
    dispatch(getPrivateListMapDB(eventList));
  }, [dispatch, eventList]);

  const publicList = useSelector((store) => store.map.public_sido);
  const privateList = useSelector((store) => store.map.private_sido);
  console.log(publicList);
  console.log(privateList);

  const click = (address) => {
    console.log(address);
    dispatch(clickOne(address));
  };

  return (
    <>
      <Wrap>
        <ContentArea>
          {clickButton === "민간분양"
            ? privateList &&
              privateList.map((item, index) => {
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
                    />
                  </Grid>
                );
              })
            : publicList &&
              publicList.map((item, index) => {
                const publicSales = "publicSales";
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
  width: 595px;
  height: 100vh;
  position: relative;
  right: 0;
  background-color: #f5f5f5;
`;

const ContentArea = styled.div`
  position: absolute;
  top: 160px;
  height: 83vh;
  overflow-y: scroll;
  overflow-x: hidden;
  & ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
