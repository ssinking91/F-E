import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    background_color,
    children,
    center,
    _onClick,
    max_width,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    background_color: background_color,
    center: center,
    max_width: max_width,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  background_color: false,
  center: false,
  _onClick: () => {},
  max_width: "100%",
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.max_width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) =>
    props.background_color
      ? `background-color: ${props.background_color};`
      : ""}
    ${(props) =>
    props.is_flex ? `display: flex;  justify-content: space-between; ` : ""}
        ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
