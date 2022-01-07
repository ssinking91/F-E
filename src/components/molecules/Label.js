import React from "react";
import { Text, Grid } from "../atoms/index";

const Label = (props) => {
  // const { announcement, registration, deadline, LabelPanState } = props;
  const { LabelPanState } = props;
  // console.log(props.panState);
  //console.log(LabelPanState);

  if (LabelPanState === "공고중") {
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
  if (LabelPanState === "접수중") {
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
  if (LabelPanState === "접수마감") {
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
};

export default Label;
