import React from "react";
import styled from "styled-components";
import { savedActions } from "../redux/modules/cardSave";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Label from "../molecules/Label";
import { Text, Image } from "../atoms/index";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
import { ReactComponent as BmarkNone } from "../../images/bmark_none.svg";

const Main2Card = (props) => {
  const { _onClick } = props;
  const dispatch = useDispatch();

  const aptNo = props.aptNo;
  console.log(aptNo);

  const islike = JSON.parse(props.islike);
  console.log(islike);

  const userKey = localStorage.getItem("userKey");
  const [save2, setSave2] = React.useState(islike);

  // 카드 저장
  const saveCard = () => {
    if (userKey === null) {
      window.alert("로그인 후 사용이 가능합니다😎");
      return;
    }
    const Page = "myPage"
    dispatch(savedActions.savedFB(aptNo, Page));
  };

  return (
    <Container>
      <Imageitem>
        <Image shape="card" src={props.image} />
        <ImageDiv
          onClick={() => {
            setSave2(!save2);
            saveCard();
          }}
        >
          {save2 ? <BmarkFill /> : <BmarkNone />}
        </ImageDiv>
      </Imageitem>
      <Item>
        <Info1 onClick={_onClick}>
          <LabelDiv>
            <Label registration></Label>
          </LabelDiv>
          <Text h4 margin="0 0 0 15px" width="316px">
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
  cursor: pointer;
`;

const LabelDiv = styled.div`
  width: 64px;
  height: 29px;
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
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  & > p:hover {
    color: #20d7ff;
  }
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
