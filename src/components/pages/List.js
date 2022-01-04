import React from "react";
import { Grid, Text } from "../atoms/index";
import NavBarLink from "../organisms/NavBarLink";

export default function List() {
  const sido = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
  return (
    <>
      <NavBarLink />
      <Grid is_flex>
        <Text h3 margin="100px auto 22px auto">
          전체 청약정보 보기
        </Text>
      </Grid>
      <Grid is_flex width="800px" margin="auto" background_color="#fafafa">
        {sido.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            background_color="#20D7FF"
            radius="36px"
          >
            <Text h4 color="#fff" margin="auto" padding="3px">
              {item}
            </Text>
          </Grid>
        ))}
      </Grid>
      <Grid
        is_flex
        width="800px"
        margin="20px auto 100px auto"
        background_color="#fafafa"
      >
        {sido.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            background_color="#20D7FF"
            radius="36px"
          >
            <Text h4 color="#fff" margin="auto" padding="3px">
              {item}
            </Text>
          </Grid>
        ))}
      </Grid>
      <Grid>최신순</Grid>
    </>
  );
}
