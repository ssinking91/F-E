import React from "react";
import styled from "styled-components";
import { Grid } from "../atoms/index";
import { ReactComponent as Bmark_fill } from "../../images/bmark_fill.svg";
import { ReactComponent as Bmark_none } from "../../images/bmark_none.svg";

const Main2Card = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Imageitem />
        <Item>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "22px",
              fontFamily: "NanumGothic",
              marginBottom: "5px",
            }}
          >
            인천광역시 강화 서희스타힐스 1단지
          </span>
          <span
            style={{
              fontSize: "10px",
              lineHeight: "20px",
              fontFamily: "NanumGothic",
              color: "#A5AAB6",
              marginBottom: "15px",
            }}
          >
            접수일 2021.12.21~23
          </span>
          <Grid is_flex>
            <Grid width={"248px"} height={"48px"} is_flex>
              <span
                style={{
                  fontSize: "10px",
                  lineHeight: "20px",
                  fontFamily: "NanumGothic",
                }}
              >
                84m² ~ 116m²/60m²~85m² <br />
                54,470 ~ 72,670만원
              </span>
            </Grid>
            <Grid width={"32px"} height={"48px"} is_flex>
              <Bmark_fill width="20" height="29" />
            </Grid>
          </Grid>
        </Item>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 460px;
  height: 140px;
  /* background-color: lemonchiffon; */
  display: flex;
  flex-wrap: wrap;
`;

const Imageitem = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  /* background-color: peachpuff; */
  background-image: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Item = styled.div`
  width: 280px;
  height: 110px;
  display: flex;
  flex-direction: column;
  margin: 10px 20px 20px 0px;
  /* background-color: peachpuff; */
`;

export default Main2Card;
