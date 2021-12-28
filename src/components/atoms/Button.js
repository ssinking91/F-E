import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
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

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: false,
  padding: false,
  background_color: false,
  color: false,
  border: "none",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.background_color};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border-radius: 36px;
  font-size: 14px;
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
