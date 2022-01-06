import React from "react";
import styled from "styled-components";
import Label from "../molecules/Label";
import { Text } from "../atoms/index";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
import { ReactComponent as BmarkNone } from "../../images/bmark_none.svg";
import apt_tobe from "../../images/apt_tobe.svg";

const Main3Card = (props) => {
  const { detailView } = props;
  const [save3, setSave3] = React.useState(false);

  return (
    <Container>
      <Text h4 color="#778899" margin="0 0 20px 0">
        {props.number}
      </Text>
      <Imageitem>
        <Image src={props.image} />
        <ImageDiv
          onClick={() => {
            setSave3(!save3);
          }}
        >
          {save3 ? <BmarkFill /> : <BmarkNone />}
        </ImageDiv>
      </Imageitem>
      <Item>
        <Info1 onClick={detailView}>
          <LabelDiv>
            <Label registration></Label>
          </LabelDiv>
          <Text h4 margin="0 0 0 15px">
            {props.name}
          </Text>
        </Info1>
        <Info2>
          <Info2Item1>
            <Text boldText>접수 기간</Text>
            <Text regularText color="#A5AAB6">
              분양 면적
            </Text>
            <Text regularText color="#A5AAB6">
              모집 유형
            </Text>
          </Info2Item1>
          <Info2Item2>
            <Text boldText>
              {props.startDate} ~ {props.endDate}
            </Text>
            <Text regularText color="#A5AAB6">
              {props.size}
            </Text>
            <Text regularText color="#A5AAB6">
              {props.price}
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
  background-image: url("${(props) => props.src || apt_tobe}");
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

const LabelDiv = styled.div`
  width: 64px;
  height: 29px;
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
  flex: wrap;
  align-items: center;
  margin-bottom: 15px;
  :hover {
    cursor: pointer;
  }
  & > p:hover {
    color: #20d7ff;
  }
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
