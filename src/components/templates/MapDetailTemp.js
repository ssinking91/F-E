import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "../atoms/index";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
import DetailImg from "../organisms/DetailImg";
import Comment from "../organisms/Comment";
import { useDispatch, useSelector } from "react-redux";
import { visibleModal } from "../redux/modules/map";
export default function MapDetailTemp(props) {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.map.visible);
  console.log(visible);
  const test = useSelector((state) => state);
  console.log(test);
  return (
    <>
      <Modal visible={visible}>
        <Grid>
          <DetailInfo />
          {/* <KakaoMiniMap /> */}
          <DetailType />
          <DetailImg />
          <Comment />
          <CloseModal onClick={() => dispatch(visibleModal(false))}>
            X
          </CloseModal>
        </Grid>
      </Modal>
    </>
  );
}

const Modal = styled.div`
  width: 1250px;
  height: 80vh;
  background-color: #fff;
  ${(props) => (props.visible ? `display:block;` : `display:none;`)}
  bottom: 0px;
  right: 640px;
  margin: -595px auto 0 30px;
  position: absolute;
  z-index: 900;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 40px 0 0 0;
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
const Container = styled.div`
  background-color: #f9f9f9;
  border-radius: 40px 40px 0px 0px;
`;

const CloseModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
