import React from "react";
// import styled from "styled-components";
import { Text, Image, Grid } from "../atoms/index";
import BundleText from "../molecules/BundleText";

export default function AsideCard(props) {
  return (
    <>
      <Grid is_flex>
        <Grid margin="0px 0px 0px 13px">
          <Image shape="card" width height src={props.image} />
        </Grid>
        <Grid width="164px">
          <Text
            h4
            style={{
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {props.name}
          </Text>
          <BundleText title={"접수"} content={"2022.01.10~"} />
          <BundleText title={"전용"} content={"25~55 평"} />
          <BundleText title={"유형"} content={"영구임대"} />
        </Grid>
        <Grid width="30px">
          <img
            src="img/rightArrow.png"
            style={{
              width: "8px",
              height: "20px",
              margin: "auto",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
