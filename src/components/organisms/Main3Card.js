import React from "react";
import styled from "styled-components";
import Label from "../molecules/Label";
// import { Grid } from "../atoms/index";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
import { ReactComponent as BmarkNone } from "../../images/bmark_none.svg";
import defaultImage from "../../images/defaultImage.png";

const Main3Card = (props) => {
  const [save3, setSave3] = React.useState(false);

  return (
    <Container>
      <span
        style={{
          width: "57px",
          height: "43px",
          fontWeight: "bold",
          fontSize: "36px",
          lineHeight: "43px",
          color: "#20D7FF",
          marginBottom: "20px",
        }}
      >
        01)
      </span>
      <Imageitem>
        <Image />
        <div
          style={{
            position: "absolute",
            width: "41px",
            height: "59px",
            right: "32px",
            top: "32px",
          }}
          onClick={() => {
            setSave3(!save3);
          }}
        >
          {save3 ? <BmarkFill /> : <BmarkNone />}
        </div>
      </Imageitem>
      <Item>
        <Info1>
          <Label registration></Label>
          <span
            style={{
              width: "291px",
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
  background-image: url("${defaultImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
