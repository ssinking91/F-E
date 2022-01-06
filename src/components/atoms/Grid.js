import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    height,
    margin,
    padding,
    background_color,
    children,
    center,
    _onClick,
    max_width,
    radius,
    justify_content,
    align_items,
    text_align,
  } = props;

  // console.log(props);

  const styles = {
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    background_color: background_color,
    center: center,
    max_width: max_width,
    radius: radius,
    justify_content,
    align_items,
    text_align,
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
  width: "100%",
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.max_width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.background_color
      ? `background-color: ${props.background_color};`
      : ""}
  ${(props) => (props.is_flex ? `display: flex;  ` : "")}
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.justify_content && `justify-content : ${props.justify_content}`}
  ${(props) => props.align_items && `align-items : ${props.align_items}`}
  ${(props) => props.text_align && `text-align : ${props.text_align}`}
`;

export default Grid;
