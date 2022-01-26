import React from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";

import {
  getPublicListMapDB,
  getPrivateListMapDB,
  filteringChangeCoords,
} from "../redux/modules/map";
import { DropDown } from "../atoms/index";
import { globalSido } from "../utilities/constants.js";

export default function TypeFilter({ setPublicPage, setPrivatePage }) {
  const dispatch = useDispatch();

  const getDB = (item) => {
    dispatch(getPublicListMapDB(item));
    dispatch(getPrivateListMapDB(item));
    dispatch(filteringChangeCoords(item));
    setPublicPage(1);
    setPrivatePage(1);
  };
  return (
    <Div>
      <WrapLeft>
        <input type="text" style={{ display: "none" }} />
        <SearchInput
          type="text"
          placeholder="시 도 단위 검색을 해주세요 ex. 서울, 강원도"
          onChange={(e) => {
            getDB(e.target.value);
          }}
        ></SearchInput>
      </WrapLeft>
      <WrapRight>
        <DropDown
          options={globalSido}
          name={"지역선택"}
          setPublicPage={setPublicPage}
          setPrivatePage={setPrivatePage}
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
