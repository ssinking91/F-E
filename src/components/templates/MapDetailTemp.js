import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "../atoms/index";
import DetailInfo from "../organisms/DetailInfo";
import DetailTemp from "../templates/DetailTemp";
import KakaoMiniMap from "../utilities/KakaoMiniMap";
import DetailType from "../organisms/DetailType";
import DetailImg from "../organisms/DetailImg";
import Comment from "../organisms/Comment";
import Footer from "../organisms/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailInfoDB, getDetailImgDB } from "../redux/modules/detail";

export default function MapDetailTemp() {
  // const dispatch = useDispatch();
  // const location = useLocation();

  // console.log(location);
  // const locate = location.pathname;
  // console.log(locate);

  // useEffect(() => {
  //   dispatch(getDetailInfoDB(locate));
  //   dispatch(getDetailImgDB(locate));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const showModal = useSelector((state) => state.map.show);

  return (
    <>
      <Modal style={{ display: showModal ? "block" : "none" }}>
        <Grid>
          <DetailInfo />
        </Grid>
      </Modal>
    </>
  );
}

const Modal = styled.div`
  width: 1250px;
  height: 80vh;
  background-color: #fff;

  bottom: 0px;
  right: 640px;
  margin: -595px auto 0 30px;
  position: absolute;
  z-index: 900;
  border-radius: 20px 20px 0 0;
`;
const Container = styled.div`
  background-color: #f9f9f9;
  border-radius: 40px 40px 0px 0px;
`;
