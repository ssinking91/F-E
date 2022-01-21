/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { mypagetActions } from "../redux/modules/mypage";
import {
  getPublicListMapDB,
  getPrivateListMapDB,
  clickOne,
  filteringChangeCoords,
} from "../redux/modules/map";

import { DropDown } from "../atoms/index";

import { globalSido } from "../utilities/constants.js";

export default function TypeFilter() {
  const dispatch = useDispatch();
  const [sido, setSido] = useState();
  const [searchText, setSearchText] = useState();
  // sido 검색
  const changeSearchText = (e) => {
    setSearchText(e.target.value);
    // dispatch(getPublicListMapDB(setSearchText));
    // dispatch(getPrivateListMapDB(setSearchText));
    console.log(e.target.value);
  };
  // sido 변경
  const sidoChange = (e) => {
    setSido(e);
  };
  // sido 변경 api
  const sidoChangeApi = () => {
    console.log(sido);
  };
  const getDB = (item) => {
    console.log(item);
    dispatch(getPublicListMapDB(item));
    dispatch(getPrivateListMapDB(item));
    dispatch(filteringChangeCoords(item));
  };
  return (
    <Div>
      <WrapLeft>
        <input type="text" style={{ display: "none" }} />
        <SearchInput
          type="text"
          placeholder="시 도 단위 검색을 해주세요 ex. 서울, 강원도"
          value={searchText}
          onChange={(e) => {
            getDB(e.target.value);
          }}
        ></SearchInput>
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
  font-size: 14px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;
