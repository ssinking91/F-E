import React from "react";
import styled from "styled-components";

const Div = (props) => {
  const { children, width, height, padding, margin, background_color, border } =
    props;

  const styles = {
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    background_color: background_color,
    border: border,
  };
  return (
    <>
      <DivBox {...styles}>{children}</DivBox>
    </>
  );
};

Div.defaultProps = {
  children: null,
  width: false,
  height: false,
  padding: false,
  margin: false,
  background_color: false,
  border: false,
};

const DivBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.background_color};
  border: ${(props) => props.border};
  border-radius: 36px;
  display: flex;
  align-items: center;
`;

export default Div;
