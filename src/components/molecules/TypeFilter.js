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
        <SearchInput type="search" placeholder="검색을 해주세요"></SearchInput>
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
const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #f6f7fa;
`;
const WrapLeft = styled.form`
  display: flex;
  align-items: center;
  margin: 0 46px;
`;
const WrapRight = styled.div`
  align-items: center;
  margin: 0 38px 5px auto;
`;

const SearchInput = styled.input`
  width: 338px;
  height: 40px;
  padding: 0 22px;
  border: 0px;
  border-radius: 36px;
  font-size: 18px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;
