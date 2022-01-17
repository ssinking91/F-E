/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import AsideCard from "../organisms/AsideCard";
import Main2Card from "./Main2Card";
import { Grid } from "../atoms/index";

import { getPublicListMapDB, clickOne } from "../redux/modules/map";

export default function AsideSection() {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.map.list);
  console.log(eventList);

  React.useEffect(() => {
    dispatch(getPublicListMapDB(eventList));
  }, [dispatch, eventList]);

  const publicList = useSelector((store) => store.map.sido);
  console.log(publicList);

  const click = (address) => {
    console.log(address);
    dispatch(clickOne(address));
  };

  return (
    <>
      <Wrap>
        <ContentArea>
          {/* <AsideCard></AsideCard> */}
          {publicList &&
            publicList.map((item, index) => {
              const panName = `[${item.aisTypeName}] ${
                item.address.split(" ")[1]
              } ${item.address.split(" ")[2]}`;
              const publicSales = "publicSales";
              return (
                <Grid
                  margin="20px 0 20px 30px"
                  key={index}
                  _onClick={() => click(item.address)}
                >
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
  width: 355px;
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
  & ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
