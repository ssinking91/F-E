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
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    color: color,
    size: size,
    weight: weight,
  };

  // text type
  if (h1) {
    return <H1 {...styles}>{children}</H1>;
  }
  if (h2) {
    return <H2 {...styles}>{children}</H2>;
  }
  if (h3) {
    return <H3 {...styles}>{children}</H3>;
  }
  if (h4) {
    return <H4 {...styles}>{children}</H4>;
  }
  if (menu) {
    return <Menu {...styles}>{children}</Menu>;
  }
  if (boldText) {
    return <BoldText {...styles}>{children}</BoldText>;
  }
  if (regularText) {
    return <RegularText {...styles}>{children}</RegularText>;
  }
  if (footer) {
    return <Footer {...styles}>{children}</Footer>;
  }
  return <P {...styles}>{children}</P>;
}

Text.defaultProps = {
  children: null,
  margin: false,
  padding: false,
  color: "#333333",
  size: "14px",
  weight: false,
};

// text style
const P = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
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
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
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
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
`;
const RegularText = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
`;
const Footer = styled.p`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 68px;
`;
