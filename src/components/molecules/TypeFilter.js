/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { mypagetActions } from "../redux/modules/mypage";

import { DropDown } from "../atoms/index";

import { globalSido } from "../utilities/constants.js";

export default function TypeFilter() {
  const dispatch = useDispatch();
  const [sido, setSido] = useState();
  // sido 변경
  const sidoChange = (e) => {
    setSido(e);
  };
  // // sido 변경 api
  // const sidoChangeApi = () => {
  //   console.log(sido);
  //   if (sido === undefined) {
  //     window.alert("관심 지역 설정해 주세요😎");
  //     return;
  //   }
  //   const userName = localStorage.getItem("userName");
  //   dispatch(mypagetActions.editUserInfosFB(userName, sido));
  //   setIsActive(!isActive);
  // };
  return (
    <Div>
      <WrapLeft>
        <Icon></Icon>
        <SearchInput type="search" placeholder="검색"></SearchInput>
      </WrapLeft>
      <WrapRight>
        <DropDown
          options={globalSido}
          sidoChange={sidoChange}
          name={"지역선택"}
        ></DropDown>
      </WrapRight>
    </Div>
  );
}
const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url("../../img/searchIcon.png");
`;
const Div = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
`;
const WrapLeft = styled.form`
  display: flex;
  align-items: center;
  padding: 0 30px;
`;
const WrapRight = styled.div`
  margin: 0 50px 0 auto;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 36px;
  padding: 0 10px;
  border: 0px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
