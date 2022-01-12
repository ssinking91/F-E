import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../atoms/index";

export default function TypeButton() {
  return (
    <Div>
      <Grid is_flex width="200px" height="36px" background_color="#fff">
        <Button ractangle width="100px" background_color="#20D7FF">
          <Text h4 color="white">
            공공
          </Text>
        </Button>
        <Button ractangle width="100px" background_color="#fafafa">
          <Text h4>민간</Text>
        </Button>
      </Grid>
    </Div>
  );
}

const Div = styled.div`
  width: 400px;
  height: 65px;
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgb(231, 231, 231);
`;
