import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../atoms/index";

export default function TypeButton() {
  // const [divisionButton]
  return (
    <Div>
      <Grid
        is_flex
        width="308px"
        height="30px"
        background_color="#2094FF"
        radius="36px"
      >
        <Button
          ractangle
          background_color="#20D7FF"
          radius="36px"
          width="154px"
        >
          <Text h4 color="white">
            공공분양
          </Text>
        </Button>
        <Button
          ractangle
          radius="36px"
          width="154px"
          background_color="#00ff0000"
        >
          <Text h4 color="white">
            민간분양
          </Text>
        </Button>
      </Grid>
    </Div>
  );
}

const Div = styled.div`
  width: 355px;
  height: 100%;
  padding: 0 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7fa;
  // border-left: 1px solid rgb(231, 231, 231);
`;
