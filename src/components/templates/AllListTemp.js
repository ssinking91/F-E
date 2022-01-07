import React, { useEffect, useState } from "react";
import { Grid, Text } from "../atoms/index";
import NavBarLink from "../organisms/NavBarLink";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";

export default function AllListTemp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrivateListDB());
    dispatch(getPublicListDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const privateList = useSelector((store) => store);
  console.log(privateList);

  const [ftbg, setFtbg] = useState(0);

  const dou = ["경기도", "강원도", "충청도", "경상도", "전라도", "제주도"];
  const si = [
    "서울",
    "경기",
    "부산",
    "대구",
    "대전",
    "광주",
    "울산",
    "세종",
    "그 외 ",
  ];
  return (
    <>
      <NavBarLink />
      <Grid is_flex>
        <Text h3 margin="100px auto 22px auto">
          전체 청약정보 보기
        </Text>
      </Grid>
      <Grid is_flex width="800px" margin="auto" background_color="#F9F9F9">
        {dou.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            background_color={index === ftbg ? `#20D7FF` : ``}
            radius="36px"
            _onClick={() => {
              setFtbg(index);
            }}
          >
            <Text
              h4
              color={index === ftbg ? `#F9F9F9` : `#A5AAB6`}
              margin="auto"
              padding="3px"
            >
              {item}
            </Text>
          </Grid>
        ))}
      </Grid>
      <Grid
        is_flex
        width="800px"
        margin="20px auto 100px auto"
        background_color="#F9F9F9"
      >
        {si.map((item, index) => (
          <Grid
            is_flex
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            background_color={index + 6 === ftbg ? `#20D7FF` : ``}
            radius="36px"
            _onClick={() => {
              setFtbg(index + 6);
            }}
          >
            <Text
              h4
              color={index + 6 === ftbg ? `#F9F9F9` : `#A5AAB6`}
              margin="auto"
              padding="3px"
            >
              {item}
            </Text>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
