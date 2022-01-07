import React from "react";
import styled from "styled-components";

export default function Text(props) {
  const {
    children,
    // text type
    h1,
    h2,
    h3,
    h4,
    menu,
    boldText,
    regularText,
    footer,
    // text style
    margin,
    padding,
    color,
    size,
    weight,
    width,
    height,
    _onClick,
    white_space,
    cursor,
    line_height,
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    color: color,
    size: size,
    weight: weight,
    width: width,
    height: height,
    white_space,
    cursor,
    line_height,
  };

  // text type
  if (h1) {
    return (
      <H1 {...styles} onClick={_onClick}>
        {children}
      </H1>
    );
  }
  if (h2) {
    return (
      <H2 {...styles} onClick={_onClick}>
        {children}
      </H2>
    );
  }
  if (h3) {
    return (
      <H3 {...styles} onClick={_onClick}>
        {children}
      </H3>
    );
  }
  if (h4) {
    return (
      <H4 {...styles} onClick={_onClick}>
        {children}
      </H4>
    );
  }
  if (menu) {
    return (
      <Menu {...styles} onClick={_onClick}>
        {children}
      </Menu>
    );
  }
  if (boldText) {
    return (
      <BoldText {...styles} onClick={_onClick}>
        {children}
      </BoldText>
    );
  }
  if (regularText) {
    return (
      <RegularText {...styles} onClick={_onClick}>
        {children}
      </RegularText>
    );
  }
  if (footer) {
    return (
      <Footer {...styles} onClick={_onClick}>
        {children}
      </Footer>
    );
  }
  return <P {...styles}>{children}</P>;
}

Text.defaultProps = {
  color: "#333333",
  size: "14px",
  white_space: "nowrap",
};

// text style
const P = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.line_height};
`;
const H1 = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: 64px;
  font-weight: 800;
  line-height: 68px;
`;
const H2 = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: 36px;
  font-weight: 800;
  line-height: 43px;
`;
const H3 = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: 24px;
  font-weight: 700;
  line-height: 25px;
`;
const H4 = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  cursor: ${(props) => (props.cursor ? `cursor: ${props.cursor}` : "")};
`;
const Menu = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 600;
  height: 0px;
`;
const BoldText = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  white-space: ${(props) => props.white_space};
`;
const RegularText = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  white-space: ${(props) => props.white_space};
`;
const Footer = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 68px;
`;
