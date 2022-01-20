import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import {
  getPublicListMapDB,
  getPrivateListMapDB,
  clickButton,
} from "../redux/modules/map";
import { Grid, Text } from "../atoms/index";

export default function TypeButton(props) {
  const dispatch = useDispatch();
  const publicList = useSelector((state) => state.map.public_sido);
  const privateList = useSelector((state) => state.map.private_sido);
  console.log(publicList);
  useEffect(() => {
    dispatch(getPublicListMapDB(publicList));
    dispatch(getPrivateListMapDB(privateList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClickOne = (item) => {
    dispatch(clickButton(item));
  };
  const [buttonBg, setButtonBg] = useState(0);
  const division = ["공공분양", "민간분양"];

  return (
    <Div>
      <Grid
        is_flex
        width="308px"
        height="30px"
        background_color="#2094FF"
        radius="36px"
      >
        {division.map((item, index) => {
          console.log(item);
          return (
            <Grid
              is_flex
              key={index}
              width="100%"
              height="30px"
              margin="auto"
              radius="36px"
              background_color={index === buttonBg ? `#20d7ff` : ""}
              _onClick={() => {
                console.log(index);
                setButtonBg(index);
                getClickOne(item);
              }}
            >
              <Grid is_flex width="100%" height="30px" cursor="pointer">
                <Text h4 color="#fff" margin="auto" padding="3px">
                  {item}
                </Text>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid
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
      </Grid> */}
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
