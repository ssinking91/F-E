import styled from "styled-components";
import React from "react";
// import defaultImage from "../../images/defaultImage.png";
import apt_tobe from "../../images/apt_tobe.svg";

const Image = (props) => {
  const { shape, src, size, width, height, margin, padding, color } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    color: color,
  };

  if (shape === "card") {
    return <CardImage {...styles}></CardImage>;
  }
  if (shape === "default") {
    return <DefaultImage {...styles}></DefaultImage>;
  }
  if (shape === "logo") {
    return <ImageLogo {...styles}></ImageLogo>;
  }
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  src: `${apt_tobe}`,
};

const CardImage = styled.div`
  width: 160px;
  height: 160px;
  margin-top: 4px;
  border-radius: 20px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DefaultImage = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.color};
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageLogo = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;
// css 변수를 만들고자 할때 --
const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
