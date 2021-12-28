import React from "react";
import styled from "styled-components";
import { Grid } from "../atoms/index";
import { ReactComponent as Bmark_fill } from "../../images/bmark_fill.svg";
import { ReactComponent as Bmark_none } from "../../images/bmark_none.svg";

const Main3Card = (props) => {
  return (
    <Container>
      <span
        style={{
          width: "235px",
          height: "20px",
          fontWeight: "bold",
          fontSize: "14px",
          lineHeight: "22px",
          fontFamily: "NanumGothic",
          color: "#20D7FF",
          marginBottom: "10px",
        }}
      >
        01)
      </span>
      <div style={{position: "relative"}}>
        <Imageitem />
        <Bmark_fill style={{position: "absolute", width:"27px", height:"39px", right: "14px", top: "16px"}}/>
      </div>
      <span
        style={{
          width: "235px",
          height: "49px",
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "25px",
          fontFamily: "NanumGothic",
          marginBottom: "10px",
        }}
      >
        인천광역시 강화
        <br />
        서희스타힐스 1단지
      </span>
      <span
        style={{
          width: "235px",
          height: "16px",
          fontSize: "12px",
          lineHeight: "20px",
          fontFamily: "NanumGothic",
          color: "#A5AAB6",
          marginBottom: "20px",
        }}
      >
        접수일 2021.12.21~23
      </span>
      <span
        style={{
          width: "235px",
          height: "38px",
          fontSize: "12px",
          lineHeight: "20px",
          fontFamily: "NanumGothic",
          display: "flex",
          alignItems: "center",
        }}
      >
        84m² ~ 116m²/60m²~85m² <br />
        54,470 ~ 72,670만원
      </span>
    </Container>
  );
};

const Container = styled.div`
  width: 235px;
  height: 420px;
  /* background-color: lemonchiffon; */
  display: flex;
  flex-direction: column;
`;

const Imageitem = styled.div`
  width: 235px;
  height: 235px;
  margin-bottom: 22px;
  background-image: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Main3Card;
