import React from "react";
import { Text, Grid } from "../atoms/index";

const Label = (props) => {
  const { announcement, registration, deadline } = props;
  if (announcement) {
    return (
      <>
        <Grid
          width="64px"
          height="29px"
          color="#20D7FF"
          border="1px solid #20D7FF"
          background_color="#fff"
          radius="36px"
          is_flex
        >
          <Text margin="auto" color="#20D7FF" bold>
            공고중
          </Text>
        </Grid>
      </>
    );
  }
  if (registration) {
    return (
      <>
        <Grid
          width="64px"
          height="29px"
          color="#fff"
          background_color="#20D7FF"
          radius="36px"
          is_flex
        >
          <Text margin="auto" color="#fff" bold>
            접수중
          </Text>
        </Grid>
      </>
    );
  }
  if (deadline) {
    return (
      <>
        <Grid
          width="64px"
          height="29px"
          color="#20D7FF"
          border="1px solid #778899"
          background_color="#00ff0000"
          radius="36px"
          is_flex
        >
          <Text margin="auto" color="#778899" bold>
            마감
          </Text>
        </Grid>
      </>
    );
  }
  return <></>;
};

export default Label;
