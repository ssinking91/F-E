import React from "react";
import styled from "styled-components";
import Label from "../molecules/Label";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
import { ReactComponent as BmarkNone } from "../../images/bmark_none.svg";
import defaultImage from "../../images/defaultImage.png";

const Main2Card = (props) => {
  const [save2, setSave2] = React.useState(false);

  return (
    <Container>
      <Imageitem>
        <Image />
        <div
          style={{
            position: "absolute",
            width: "27.27px",
            height: "38.29px",
            left: "111.36px",
            bottom: "123.35px",
          }}
          onClick={() => {
            setSave2(!save2);
          }}
        >
          {save2 ? <BmarkFill /> : <BmarkNone />}
        </div>
      </Imageitem>
      <Item>
        <Info1>
          <Label registration></Label>
          <span
            style={{
              width: "316px",
              height: "25px",
              fontWeight: "bold",
              fontSize: "18px",
              lineHeight: "25px",
              color: "#333333",
              margin: "0 0 0 15px",
            }}
          >
            인천 강화 서희스타힐스 1단지
          </span>
        </Info1>
        <Info2>
          <Info2Item1>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "25px",
                color: "#333333",
                whiteSpace: "nowrap",
              }}
            >
              접수 기간
            </span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "25px",
                color: "#A5AAB6",
                whiteSpace: "nowrap",
              }}
            >
              분양 면적
            </span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "25px",
                color: "#A5AAB6",
                whiteSpace: "nowrap",
              }}
            >
              분양 가격
            </span>
          </Info2Item1>
          <Info2Item2>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "25px",
                color: "#333333",
              }}
            >
              2021.12.21 ~ 2021.12.23
            </span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "25px",
                color: "#A5AAB6",
              }}
            >
              84m² ~ 116m²/60m²~85m²
            </span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "25px",
                color: "#A5AAB6",
              }}
            >
              54,470 ~ 72,670만원
            </span>
          </Info2Item2>
        </Info2>
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
  background-image: url("${defaultImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  height: 29px;
  display: flex;
  margin-bottom: 15px;
  align-items: center;
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
