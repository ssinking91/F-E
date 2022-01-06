import React from "react";
import styled from "styled-components";
import Label from "../molecules/Label";
import { Text, Image } from "../atoms/index";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
import { ReactComponent as BmarkNone } from "../../images/bmark_none.svg";

const Main2Card = (props) => {
  const { _onClick } = props;
  const [save2, setSave2] = React.useState(false);

  return (
    <Container onClick={_onClick}>
      <Imageitem>
        <Image shape="card" src={props.image} />
        <ImageDiv
          onClick={() => {
            setSave2(!save2);
          }}
        >
          {save2 ? <BmarkFill /> : <BmarkNone />}
        </ImageDiv>
      </Imageitem>
      <Item>
        <Info1>
          <Label registration height="29px"></Label>
          <Text h4 margin="0 0 0 15px" width="331px" height="50px">
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
              분양 가격
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
Main2Card.defaultProps = {
  _onClick: () => {},
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

// const Image = styled.div`
//   width: 160px;
//   height: 160px;
//   margin-top: 4px;
//   border-radius: 20px;
//   background-image: url("${apt_tobe}");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

const ImageDiv = styled.div`
  position: absolute;
  width: 27.27px;
  height: 38.29px;
  left: 111.36px;
  bottom: 123.35px;
`;

const Item = styled.div`
  width: 395px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 14px 0px 30px;
`;

const Info1 = styled.div`
  width: 395px;
  height: 50px;
  display: flex;
  margin-bottom: 15px;
  // align-items: center; // 라벨 가운데 정렬시
`;

const Info2 = styled.div`
  width: 395px;
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
  width: 316px;
  height: 76px;
  display: flex;
  flex-direction: column;
`;

export default Main2Card;
