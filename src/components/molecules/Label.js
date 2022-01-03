import React from "react";
import { Text, Div } from "../atoms/index";

const Label = (props) => {
  const { announcement, registration, deadline } = props;
  if (announcement) {
    return (
      <>
        <Div
          width="64px"
          height="29px"
          color="#20D7FF"
          border="1px solid #20D7FF"
          background_color="#fff"
        >
          <Text margin="auto" color="#20D7FF" bold>
            공고중
          </Text>
        </Div>
      </>
    );
  }
  if (registration) {
    return (
      <>
        <Div width="64px" height="29px" color="#fff" background_color="#20D7FF">
          <Text margin="auto" color="#fff" bold>
            접수중
          </Text>
        </Div>
      </>
    );
  }
  if (deadline) {
    return (
      <>
        <Div
          width="64px"
          height="29px"
          color="#20D7FF"
          border="1px solid #778899"
          background_color="#00ff0000"
        >
          <Text margin="auto" color="#778899" bold>
            마감
          </Text>
        </Div>
      </>
    );
  }
  return <></>;
};

export default Label;
