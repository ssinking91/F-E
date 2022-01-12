import React from "react";
import styled from "styled-components";

import { Text } from "../atoms/index";
import apt_tobe from "../../images/apt_tobe.svg";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
const NoneMain2Card = (props) => {
  return (
    <Container>
      <Imageitem>
        <Image />
        <ImageDiv>
            <BmarkFill/>
        </ImageDiv>
      </Imageitem>
      <Item>
          <Text h4 color=" #A5AAB6">
              현재 청약정보가 없어요
          </Text>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 595px;
  height: 164px;
  display: flex;
  flex-wrap: wrap;
`;

const Imageitem = styled.div`
  width: 160px;
  height: 162.65px;
  position: relative;
  margin-right: 40px;
`;

const Image = styled.div`
  width: 160px;
  height: 160px;
  margin-top: 4px;
  border-radius: 20px;
  background-image: url("${(props) => props.src || apt_tobe}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageDiv = styled.div`
  position: absolute;
  width: 27.27px;
  height: 38.29px;
  left: 111.36px;
  bottom: 123.35px;
  cursor: pointer;
`;

const Item = styled.div`
  width: 395px;
  height: 120px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: center; */
  margin: 14px 0px 30px;
`;

export default NoneMain2Card;
