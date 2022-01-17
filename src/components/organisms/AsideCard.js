import React from "react";
// import styled from "styled-components";
import { Text, Image, Grid } from "../atoms/index";
import BundleText from "../molecules/BundleText";

export default function AsideCard() {
  return (
    <>
      <Grid is_flex>
        <Image
          shape="card"
          width="100px"
          height="100px"
          margin="19px 14px 19px 23px"
        />
        <Grid>
          <Text h4>경기도 화성시</Text>
          <BundleText title={"접수 기간"} content={"2022.01.10~"} />
          <BundleText title={"분양 면적"} content={"25~55 평"} />
          <BundleText title={"모집 유형"} content={"영구임대"} />
        </Grid>
      </Grid>
    </>
  );
}
