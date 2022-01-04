import React from "react";
import styled from "styled-components";
import Label from "../molecules/Label";
import { Text } from "../atoms/index";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
import { ReactComponent as BmarkNone } from "../../images/bmark_none.svg";
import apt_tobe from "../../images/apt_tobe.svg";

const Main3Card = (props) => {
  const [save3, setSave3] = React.useState(false);

  return (
    <Container>
      <Text h4 color="#778899" margin="0 0 20px 0">
        01)
      </Text>
      <Imageitem>
        <Image />
        <ImageDiv
          onClick={() => {
            setSave3(!save3);
          }}
        >
          {save3 ? <BmarkFill /> : <BmarkNone />}
        </ImageDiv>
      </Imageitem>
      <Item>
        <Info1>
          <Label registration></Label>
          <Text h4 margin="0 0 0 15px">
            인천 강화 서희스타힐스 1단지
          </Text>
        </Info1>
        <Info2>
          <Info2Item1>
            <Text boldText>접수 기간</Text>
            <Text regularText color="#A5AAB6">
              분양 면적
            </Text>
            <Text regularText color="#A5AAB6">
              분양 가격
            </Text>
          </Info2Item1>
          <Info2Item2>
            <Text boldText>2021.12.21 ~ 2021.12.23</Text>
            <Text regularText color="#A5AAB6">
              84m² ~ 116m²/60m²~85m²
            </Text>
            <Text regularText color="#A5AAB6">
              54,470 ~ 72,670만원
            </Text>
          </Info2Item2>
        </Info2>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 370px;
  height: 593px;
  /* background-color: lemonchiffon; */
  display: flex;
  flex-direction: column;
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
  background-image: url("${apt_tobe}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageDiv = styled.div`
  position: absolute;
  width: 41px;
  height: 59px;
  right: 32px;
  top: 32px;
`;

const Item = styled.div`
  width: 370px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

const Info1 = styled.div`
  width: 370px;
  height: 225px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Info2 = styled.div`
  width: 370px;
  height: 76px;
  display: flex;
`;

const Info2Item1 = styled.div`
  width: 57px;
  height: 76px;
  display: flex;
  flex-direction: column;
  margin-right: 22px;
`;

const Info2Item2 = styled.div`
  width: 282px;
  height: 76px;
  display: flex;
  flex-direction: column;
`;

export default Main3Card;
