import React from "react";
import styled from "styled-components";
import TypeButton from "../molecules/TypeButton";
import TypeFilter from "../molecules/TypeFilter";

export default function NavBarSub() {
  return (
    <Div>
      <TypeFilter></TypeFilter>
      <TypeButton></TypeButton>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 52px;
  position: absolute;
  display: flex;
  top: 97px;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid rgb(205, 205, 205);
  //   opacity: 0.1;
`;
