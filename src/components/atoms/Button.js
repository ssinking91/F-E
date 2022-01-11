import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    ractangle,
    children,
    margin,
    width,
    padding,
    color,
    background_color,
    border,
  } = props;
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    color: color,
    background_color: background_color,
    border: border,
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

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 30px;
  border: none;
  font-size: 24px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
`;

export default Button;
