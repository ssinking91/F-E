import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, padding } = props;
  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    padding: padding,
  };

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#333333",
  size: "14px",
  margin: false,
  padding: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "800" : "400")};
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Text;
