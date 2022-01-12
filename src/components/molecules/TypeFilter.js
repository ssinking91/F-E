import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../atoms/index";

export default function TypeFilter() {
  return (
    <Div>
      <Wrap>
        <Icon></Icon>
        <SearchInput type="search" placeholder="검색"></SearchInput>
      </Wrap>
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
const Wrap = styled.form`
  display: flex;
  align-items: center;
  padding: 0 30px;
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
