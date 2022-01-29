import React from "react";
import styled from "styled-components";
import { Text } from "../atoms/index";
import defaultLogoImage from "../../images/defaultLogoImage.svg";

const Main3Card = (props) => {

  return (
    <Container>
      <Imageitem>
        <Image src={props.image} />
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
  width: 370px;
  height: 593px;
  display: flex;
  flex-direction: column;
  margin-Left: 50px;
`;

const Imageitem = styled.div`
  width: 370px;
  height: 370px;
  position: relative;
  margin-bottom: 40px;
`;

const Image = styled.div`
  width: 370px;
  height: 370px;
  border-radius: 20px;
  background-image: url("${(props) => props.src || defaultLogoImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Item = styled.div`
  width: 370px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
`;

export default Main3Card;
