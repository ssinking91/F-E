import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    ractangle,
    children,
    margin,
    width,
    padding,
    color,
    background_color,
    border,
    radius,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    color: color,
    background_color: background_color,
    border: border,
    radius: radius,
  };
  if (ractangle) {
    return (
      <>
        <RactangleButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </RactangleButton>
      </>
    );
  }
  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {};

const RactangleButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.background_color};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border-radius: ${(props) => props.radius};
  cursor: pointer;
  border: ${(props) => props.border};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  outline: 0;
  border: 0;
`;

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.background_color};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border-radius: 36px;
  cursor: pointer;
  border: ${(props) => props.border};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
